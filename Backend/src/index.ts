import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

dotenv.config();

connectDB().then(() => {
  
  console.log("Server is running...")
})