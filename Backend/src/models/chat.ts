import mongoose, { Schema, model } from "mongoose";
import { IChat } from "../interfaces/models/IChat";
import { ConversationType } from "../interfaces/enums/conversationType";


const chatSchema = new Schema<IChat>(
    {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: Schema.Types.String,
      enum: Object.values(ConversationType),
      required: true,
    },
    lastMessageId: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    unseenCount: {
      type: Number,
      default: 0,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true});

  chatSchema.virtual('id').get(function () {
    return this._id;
  });

const Chat = model<IChat>("Chat", chatSchema);
export default Chat;
