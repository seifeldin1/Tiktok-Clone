import { NextFunction, Request, Response } from "express";

export interface IChatController {
    getUserChatList(req:Request , res:Response , next:NextFunction) : Promise<any>
    getChatHistory(req:Request , res:Response, next:NextFunction) : Promise<any>
    markAsReadOrUnread(req:Request , res:Response , next:NextFunction) : Promise<any>
    uploadMedia(req:Request , res:Response , next:NextFunction) : Promise<any>
    addOrRemoveParticipant(req:Request , res:Response , next:NextFunction) : Promise<any>
    getAvailableUsersToAdd(req:Request , res:Response , next:NextFunction) : Promise<any>
    getChatCard(req:Request , res:Response , next:NextFunction) : Promise<any>
    getTotalUnreadChats(req:Request , res:Response , next:NextFunction) : Promise<any>
}