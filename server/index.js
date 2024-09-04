import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import newsRouter from './routes/news.route.js'

const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(cookieParser());
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on port ${process.env.PORT}`);
})

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
app.use("/api/news",newsRouter)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})