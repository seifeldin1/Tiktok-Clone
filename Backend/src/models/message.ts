import mongoose, { Schema } from "mongoose";
import { IMessage } from "../interfaces/models/IMessage";
import { MessageType } from "../interfaces/enums/messageType";
import { MediaType } from "../interfaces/enums/mediaType";


const messageSchema = new Schema<IMessage>(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chatId: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    content: {
      type: Schema.Types.String,
      default: "",
    },
    mediaUrl: {
      type: Schema.Types.String,
      default: "",
    },
    media: {
      type: Schema.Types.String,
      enum: Object.values(MediaType),
      default: MediaType.NONE,
    },
    type: {
      type: Schema.Types.String, 
      enum: Object.values(MessageType),
      required: true,
      default: MessageType.TEXT,
    },
    seenBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    systemMessage: {
      type: Schema.Types.Boolean,
      default: false,
    },
  },{ timestamps: true });

  messageSchema.virtual('id').get(function () {
    return this._id;
  });

const Message = mongoose.model<IMessage>("Message", messageSchema);
export default Message;

