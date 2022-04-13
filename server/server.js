
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import User from './models/user'
import { hashPassword, comparePassword } from './helpers/auth'
import jwt from "jsonwebtoken";
import { requireSignin } from "./middlewares";
const morgan = require('morgan');

// SEE the dotenv FILE FOR DATABASE CONNECTION

require("dotenv").config();
const app = express();


mongoose.connect(process.env.DATABASE).then(() => console.log(" DB connected")).catch((err) => console.log("err in db", err));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:3000"],
}))

// register page api
app.post('/api/register', async (req, res) => {
    // console.log("register form Data ",req.body);
    const { name, email, password, secret } = req.body;
    // validation of user
    if (!name || !password || !secret || !email) return res.status(400).send("please fill the form correct");
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).send("user already exist with this email");

    // hashing password
    const hashedPassword = await hashPassword(password);
    const user = new User({ name, email, password: hashedPassword, secret });
    try {
        // console.log("User=>",user);
        await user.save();// saving user in database
        return res.json({
            ok: true
        });
    } catch (err) {
        console.log("Registration Failed=>", err);
        return res.status(400).send("Error try again") // for errors
    }

});


//login page api
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);
    try {
        // validation of email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send("Incorrect Email or Password ");
        //validation of password
        const match = await comparePassword(password, user.password);
        if (!match) return res.status(400).send("Incorrect Email or Password ");
        // creating token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        user.password = undefined;
        user.secret = undefined;
        res.json({
            token,
            user,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error please try again.")
    }
});

// dash bord page
app.get("/api/current-user", requireSignin, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.json({ ok: true });
    } catch (err) {
        console.log(err)
        res.sendStatus(400);
    }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running ${port}`);
})