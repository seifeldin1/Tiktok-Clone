import dotenv from "dotenv";
dotenv.config();

if (!process.env.JWT_ACCESSTOKEN_SECRET) {
  throw new Error("Missing JWT_ACCESSTOKEN_SECRET in .env");
}
if (!process.env.JWT_REFRESHTOKEN_SECRET) {
  throw new Error("Missing JWT_REFRESHTOKEN_SECRET in .env");
}

export const JWT_ACCESSTOKEN_SECRET: string = process.env.JWT_ACCESSTOKEN_SECRET;
export const JWT_REFRESHTOKEN_SECRET: string = process.env.JWT_REFRESHTOKEN_SECRET;

export const JWT_ACCESSTOKEN_EXPIRESIN: any = process.env.JWT_EXPIRES_IN || 900;
export const JWT_REFRESHTOKEN_EXPIRESIN: any = process.env.JWT_REFRESH_EXPIRES_IN || 604800;
