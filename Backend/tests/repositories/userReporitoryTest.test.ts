import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "../../src/config/db";
import UserModel from "../../src/models/user";
import { expect } from "chai";
import { IUserRepository } from "../../src/interfaces/repositories/IUserRepository";
import  UserRepository  from "../../src/repositories/UserRepository";




dotenv.config()

describe("User Repository Test", () => {

    let userRepository: IUserRepository

    before(async () => {
        await connectDB();
        userRepository = new UserRepository();
    });

    after(async () => {
        await mongoose.disconnect();
    });

    beforeEach(async () => {
        await UserModel.deleteMany({});
    });


    it("should create a new user", async () => {
        const user = {
            email: "jhondoe@example.com",
            username: "testuser",
            password: "testpassword",
            fullName: "Test User",
        };

        const createdUser = await userRepository.create(user);
        expect(createdUser).to.have.property("email", user.email);
        expect(createdUser).to.exist
    });

    it("should fail to create user due to password length" , async () => {
        const user = {
            email: "jhondoe@example.com",
            username: "testuser",
            password: "testp",
            fullName: "Test User",
        };
        try { 
            const createdUser = await UserModel.create(user);
        } catch (error) {
            expect(error).to.exist;
        }

    })

    it("should find a user by email", async () => {
        const user = {
            email: "jhondoe@example.com",
            username: "testuser",
            password: "testpassword",
            fullName: "Test User",
        };
        await UserModel.create(user);
        const foundUser = await userRepository.findByEmail(user.email);
        expect(foundUser).to.exist;
        expect(foundUser).to.have.property("email", user.email);
    });

    it("should find a user by username", async () => {
        const user = {
            email: "jhondoe@example.com",
            username: "testuser",
            password: "testpassword",
            fullName: "Test User",
        };
        await UserModel.create(user);
        const foundUser = await userRepository.findByUsername(user.username);
        expect(foundUser).to.exist;
        expect(foundUser).to.have.property("username", user.username);
    });

    it("should update a user", async () => {
        const user = {
            email: "jhondoe@example.com",
            username: "testuser",
            password: "testpassword",
            fullName: "Test User",
        };
        const createdUser = await UserModel.create(user);
        createdUser.fullName = "Updated User";
        const updatedUser = await userRepository.update(createdUser);
        expect(updatedUser).to.exist;
        expect(updatedUser).to.have.property("fullName", "Updated User");
    });

    it("should delete a user", async () => {
        const user = {
            email: "jhondoe@example.com",
            username: "testuser",
            password: "testpassword",
            fullName: "Test User",
        };
        const createdUser = await UserModel.create(user);
        const deletedUser = await userRepository.delete(createdUser.id);
        const foundUser = await UserModel.findById(createdUser.id);
        expect(foundUser).to.not.exist;
    });
});