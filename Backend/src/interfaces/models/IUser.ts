import { Document, Types } from "mongoose";

export interface IUser extends Document {
  email: string;
  password?: string; 
  fullName: string;
  profilePic?: string;
  bio?: string;
  followers: Types.ObjectId[];
  following: Types.ObjectId[];
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  googleId?: string;
  facebookId?: string;
}
