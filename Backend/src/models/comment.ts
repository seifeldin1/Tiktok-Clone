import mongoose, { Schema } from "mongoose";
import { IComment } from "../interfaces/models/IComment";

const commentSchema = new Schema<IComment>({
  videoId: {
    type: Schema.Types.ObjectId,
    ref: "Video",
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  parentComment: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
    default: null,
  },
  reactions: {
    like: {
      type: Number,
      default: 0,
    },
    laugh: {
      type: Number,
      default: 0,
    },
    sad: {
      type: Number,
      default: 0,
    },
  },
}, { timestamps: true });

commentSchema.virtual('id').get(function () {
  return this._id;
});

const Comment = mongoose.model<IComment>("Comment", commentSchema);
export default Comment;
