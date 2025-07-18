import { Schema, Types } from "mongoose";
import { MessageType } from "../enums/messageType";
import { MediaType } from "../enums/mediaType";




export interface IMessage {
  id: Schema.Types.ObjectId | Types.ObjectId
  senderId: Schema.Types.ObjectId | Types.ObjectId
  chatId: Schema.Types.ObjectId | Types.ObjectId
  content: string;
  mediaUrl: string; 
  media: MediaType;
  type: MessageType; 
  seenBy: Schema.Types.ObjectId[] | Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  systemMessage: boolean
}