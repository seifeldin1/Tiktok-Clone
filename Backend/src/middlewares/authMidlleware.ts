import { Response , Request, NextFunction   } from "express";
import jwt from "jsonwebtoken";
import { JWT_ACCESSTOKEN_SECRET } from "../config/jwt";
import { Unauthorized } from "../utils/errorHandler";
import { verifyAccessToken } from "../utils/token";

export const authMiddleware = (req:Request , res: Response , next: NextFunction) => {
    const authHeader = req.headers.authorization
    if(!authHeader )
        return Unauthorized(res , "Missing Authorization Header")
    if(!authHeader.startsWith("Bearer "))
        return Unauthorized(res , "Invalid Authorization Header")
    const token = authHeader.split(" ")[1]
    try {
        const decoded = verifyAccessToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return Unauthorized(res , "Invalid Token")
    }
}