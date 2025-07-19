import jwt from "jsonwebtoken"
import { JWT_ACCESSTOKEN_EXPIRESIN, JWT_ACCESSTOKEN_SECRET, JWT_REFRESHTOKEN_EXPIRESIN, JWT_REFRESHTOKEN_SECRET } from "../config/jwt"


export const generateAccessToken = (payload: object) : string => {
    return jwt.sign(payload , JWT_ACCESSTOKEN_SECRET , {expiresIn: JWT_ACCESSTOKEN_EXPIRESIN});
}

export const generateRefreshToken = (payload: object) : string => {
    return jwt.sign(payload , JWT_REFRESHTOKEN_SECRET , {expiresIn: JWT_REFRESHTOKEN_EXPIRESIN});
}

export const verifyAccessToken = (token: string) : any => {
    return jwt.verify(token , JWT_ACCESSTOKEN_SECRET);
}

export const verifyRefreshToken = (token: string) : any => {
    return jwt.verify(token , JWT_REFRESHTOKEN_SECRET);
}