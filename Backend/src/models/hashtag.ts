import mongoose, { Schema } from "mongoose";
import { IHashtag } from "../interfaces/models/IHashtag";

const hashtagSchema = new Schema<IHashtag>({
  tag: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  videoCount: {
    type: Number,
    default: 0,
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  trendingScore: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Hashtag = mongoose.model<IHashtag>("Hashtag", hashtagSchema);
export default Hashtag;
