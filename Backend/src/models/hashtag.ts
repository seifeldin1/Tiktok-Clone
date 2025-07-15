import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema(
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
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
        },
        ],
        trendingScore: {
            type: Number,
            default: 0,
        },
    },{ timestamps: true });

const Hashtag = mongoose.model("Hashtag", hashtagSchema);
export default Hashtag;
