import { Document, Types } from "mongoose";

export interface IUser extends Document {
  email: string;
  username: string;
  password?: string; 
  fullName: string;
  profilePic?: string;
  bio?: string;
  followers: Types.ObjectId[];
  following: Types.ObjectId[];
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  deleted ?: boolean


  googleId?: string;
  facebookId?: string;
}
