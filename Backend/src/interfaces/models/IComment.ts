import { Document, Types } from "mongoose";

export interface IComment extends Document {
  videoId: Types.ObjectId;
  author: Types.ObjectId;
  content: string;
  parentComment?: Types.ObjectId | null;
  reactions: {
    like: number;
    laugh: number;
    sad: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
