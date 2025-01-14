

import mongoose from "mongoose";
const {Schema}=mongoose;
const userSchema =new Schema({//Schema to store user information
    name:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        trim:true,
        min:6,
        max:64
    },
    secret:{
        type:String,
        required:true,
    },
    about:{},
    photo:String,
    following:[{type:Schema.ObjectId,ref:"User"}],
    followers:[{type:Schema.ObjectId,ref:"User"}],
},
{timestamps:true}
);

export default mongoose.model("User",userSchema);