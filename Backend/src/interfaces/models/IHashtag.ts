import { Document, Types } from "mongoose";

export interface IHashtag extends Document {
  tag: string;
  videoCount: number;
  videos: Types.ObjectId[];
  trendingScore: number;
  createdAt: Date;
  updatedAt: Date;
}
