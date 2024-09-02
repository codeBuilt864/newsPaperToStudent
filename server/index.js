import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js';
import { Admin } from './models/Admin.js';
import { Student } from './models/Student.js';
import { News } from './models/News.js';


const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(cookieParser());
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log("Server is Running");
})