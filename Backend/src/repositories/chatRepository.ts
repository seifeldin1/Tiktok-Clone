import { IChatRepository } from "../interfaces/repositories/IChatRepository"
import { IChat } from "../interfaces/models/IChat"
import Chat from "../models/chat"
import Message from "../models/message"
import { MessageStatus } from "../interfaces/enums/messageStatus"
import MessageRepository from "./messageRepository"
import { IMessage } from "../interfaces/models/IMessage"


class ChatRepository implements IChatRepository {
    async createChat(chat: Partial<IChat>): Promise<IChat> {
        const newChat = new Chat(chat)
        await newChat.save()
        return newChat
    }
    async getChatById(id: string): Promise<IChat | null> {
        const existingChat = await Chat.findById(id)
        return existingChat;
    }
    async deleteChatById(id: string): Promise<IChat|null> {
        const existingChat = await Chat.findByIdAndDelete(id)
        return existingChat;
    }

    async updateChatById(id: string, chat: Partial<IChat>): Promise<IChat|null> {
        const existingChat = await Chat.findByIdAndUpdate(id, chat, { new: true })
        return existingChat;
    }

    async getlastMessageByChatId(id: string): Promise<IMessage | null> {
        const existingChat = await Chat.findById(id)
        const message = new MessageRepository()
        
        if(!existingChat?.lastMessageId) return null
        const lastMessage = await message.getMessageByID(String(existingChat.lastMessageId))
            
        return lastMessage
    }

    async getMessagesByChatId(chatId: string): Promise<IMessage[]> {
        return await Message.find({ chatId: chatId }).sort({ createdAt: -1 });
    }

    async updateMessagesStatusByChatId(chatId: string, status: MessageStatus): Promise<void> {
        await Message.updateMany({ chatId }, { status });
    }
    
    async getUnseenMessageCount(chatId:string , userId:string) : Promise<Number> {
        const unseenCount = await Message.countDocuments(
            {
                chatId: chatId,
                senderId: { $ne: userId }, 
                seenBy: { $ne: userId }, 
            }
        )
        return unseenCount;
    }
    
}

export default ChatRepository