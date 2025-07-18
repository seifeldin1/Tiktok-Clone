import { Response } from "express";

export const Success = (res: Response, message: string , extra : object = {}) => res.status(200).json({ success: true, message , ...extra });
export const Created = (res: Response, message: string , extra : object = {}) => res.status(201).json({ success: true, message , ...extra });
export const Accepted = (res: Response, message: string , extra : object = {}) => res.status(202).json({ success: true, message , ...extra });
export const NoContent = (res: Response, message: string , extra : object = {}) => res.status(204).json({ success: true, message , ...extra });
