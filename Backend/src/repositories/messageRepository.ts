import { IMessageRepository } from "../interfaces/repositories/IMessageRepository";
import { IMessage } from "../interfaces/models/IMessage";
import Message from "../models/message";

class MessageRepository implements IMessageRepository {
    async createMessage(message: Partial<IMessage>): Promise<IMessage> {
        const newMessage = new Message(message);
        const savedMessage = await newMessage.save();
        return savedMessage;
    }

    
    async deleteMessageById(id: string): Promise<IMessage | null> {
        return await Message.findByIdAndDelete(id);
    }

    async updateMessageById(id: string, message: Partial<IMessage>): Promise<IMessage | null> {
        return await Message.findByIdAndUpdate(id, message);
    }

    getMessageByID(id: string): Promise<IMessage | null>{
        return Message.findById(id);
    }
}

export default MessageRepository;