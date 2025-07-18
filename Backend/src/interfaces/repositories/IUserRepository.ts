import { IUser } from "../models/IUser";

export interface  IUserRepository{
    create(user: Partial<IUser>): Promise<IUser>;
    findByUsername(username: string): Promise<IUser | null>;
    findByEmail(email: string): Promise<IUser | null>;
    findById(id: string): Promise<IUser | null>;
    update(user: Partial<IUser>): Promise<IUser>;
    delete(id: string): Promise<void>;
}