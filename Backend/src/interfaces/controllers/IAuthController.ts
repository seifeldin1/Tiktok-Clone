import { Request, Response } from "express";

export interface IAuthController {
  login(req: Request, res: Response): Promise<Response>;
  register(req: Request, res: Response): Promise<Response>;
  refreshToken(req: Request, res: Response): Promise<Response>; 
  logout(req: Request, res: Response): Promise<Response>; 
}