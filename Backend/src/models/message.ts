import mongoose, { Schema } from "mongoose";
import { IMessage } from "../interfaces/models/IMessage";

const messageSchema = new Schema<IMessage>({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
  },
  image: {
    type: String,
  },
}, { timestamps: true });

const Message = mongoose.model<IMessage>("Message", messageSchema);
export default Message;
