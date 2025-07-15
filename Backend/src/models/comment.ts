import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content:{
        type:String,
        required:true,
    },
    parentComment: {
        type: mongoose.Schema.Types.ObjectId,
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

},{timestamps: true});

const Comment = mongoose.model("Message",commentSchema);
export default Comment;