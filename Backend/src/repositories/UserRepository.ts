import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { IUser } from "../interfaces/models/IUser";
import UserModel from "../models/user";

class UserRepository implements IUserRepository {
    /**
     * Creates a new user in the database.
     * 
     * @param user - Partial user object containing user details.
     * @returns The created user object.
     */
    async create(user: Partial<IUser>): Promise<IUser> {
        const userData = new UserModel(user)
        await userData.save()
        return userData
    }

    /**
     * Finds a user by their email address
     * @param email The email address of the user to find
     * @returns The user with the given email address, or null if no user is found
     */
    async findByEmail(email: string): Promise<IUser | null> {
        return await UserModel.findOne({ email })
    }

    /**
     * Finds a user by their id
     * @param id The id of the user to find
     * @returns The user with the given id, or null if no user is found
     */
    async findById(id: string): Promise<IUser | null> {
        return await UserModel.findById(id)
    }

    /**
     * Finds a user by their username.
     * 
     * @param username The username of the user to find.
     * @returns The user with the given username, or null if no user is found.
     */
    async findByUsername(username: string): Promise<IUser | null> {
        return await UserModel.findOne({ username })
    }

    /**
     * Updates an existing user in the database.
     * 
     * @param user - Partial user object containing user details.
     * @returns The updated user object.
     */
    async update(user: Partial<IUser>): Promise<IUser> {
        const userData = await UserModel.findByIdAndUpdate(user._id, user, { new: true , runValidators: true })
        if (!userData) {
            throw new Error("User not found")
        }
        return userData
    }


    /**
     * Deletes a user in the database.
     * 
     * @param id The id of the user to delete.
     * @throws If the user is not found.
     */
    async delete(id: string): Promise<void> {
        await UserModel.findByIdAndDelete(id)
    }
    

}

export default UserRepository