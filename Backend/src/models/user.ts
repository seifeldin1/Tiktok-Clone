import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },
    fullName:{
        type: String,
        required: true,
    },
    profilePic:{
        type: String,
        default: "",
    },
    bio: String,
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
},{timestamps:true});

const User = mongoose.model("User",userSchema);
export default User;