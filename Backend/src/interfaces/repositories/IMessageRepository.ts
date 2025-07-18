import { IMessage } from "../models/IMessage";

export interface IMessageRepository {
    createMessage(message: Partial<IMessage>): Promise<IMessage>
    deleteMessageById(id: string): Promise<IMessage | null>
    updateMessageById(id: string, message: Partial<IMessage>): Promise<IMessage | null>
    getMessageByID(id: string): Promise<IMessage | null>
}