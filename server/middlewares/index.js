import expressJwt from 'express-jwt'
require("dotenv").config();
export const requireSignin=expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});