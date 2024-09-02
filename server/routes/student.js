import express from 'express';
import { Student } from "../models/Student.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const router = express.Router();
import { verifyAdmin } from './auth.js';

router.post('/register', verifyAdmin, async (req, res) => {
    try {
        const {firstname,lastname , password,email} = req.body;
        const student = await Student.findOne({firstname})
        if(student) {
            return res.json({message: "Student is registered"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newstudent = new Student({
            firstname,
            password: hashPassword,
            lastname,
            email:email
        })
        await newstudent.save()
        return res.json({registered: true})
        
    } catch (err) {
        return res.json({message: "Error in registering student"})
    }
})

export { router as studentRouter}