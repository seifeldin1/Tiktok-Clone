import { IChat } from "../models/IChat";
import { IMessage } from "../models/IMessage";
import { MessageStatus } from "../enums/messageStatus";
export interface IChatRepository {
    createChat(conversation: Partial<IChat>): Promise<IChat>
    getChatById(id: string): Promise<IChat|null>
    deleteChatById(id: string): Promise<IChat|null>
    updateChatById(id: string, conversation: Partial<IChat>): Promise<IChat|null>
    getlastMessageByChatId(id: string): Promise<IMessage | null>
    getMessagesByChatId(chatId: string): Promise<IMessage[]>
    getUnseenMessageCount(chatId:string , userId:string) : Promise<Number>
    updateMessagesStatusByChatId(chatId: string, status: MessageStatus): Promise<void> 
}