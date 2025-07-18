import mongoose, { Schema } from "mongoose";
import { IHashtag } from "../interfaces/models/IHashtag";

const hashtagSchema = new Schema<IHashtag>(
  {
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
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

hashtagSchema.virtual("id").get(function () {
  return this._id;
});

const Hashtag = mongoose.model<IHashtag>("Message", hashtagSchema);
export default Hashtag;