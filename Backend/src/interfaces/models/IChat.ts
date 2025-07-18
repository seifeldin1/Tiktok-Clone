import { Schema, Types } from "mongoose";
import { ConversationType } from "../enums/conversationType";


export interface IChat {
    id: Schema.Types.ObjectId | Types.ObjectId
    title?: string
    type: ConversationType
    lastMessageId?: Schema.Types.ObjectId | Types.ObjectId
    createdBy: Schema.Types.ObjectId | Types.ObjectId
    unseenCount: number
    createdAt: Date;
    updatedAt: Date;
    isRead: boolean
};