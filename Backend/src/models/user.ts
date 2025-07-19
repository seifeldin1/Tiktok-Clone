// models/user.model.ts
import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/models/IUser";

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 8,
  },
  fullName: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: "",
  },
  bio: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  facebookId: {
    type: String,
    unique: true,
    sparse: true,
  },
  refreshToken: {
  type: String,
  default: "",
  }
}, { timestamps: true });

const UserModel = mongoose.model<IUser>("User", userSchema);
export default UserModel;
