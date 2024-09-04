import { Student } from "../models/Student.js";
import {Admin} from "../models/Admin.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
// console.log(req.body);
  const { firstname,lastname, email, password } = req.body
  const hashedPassword = bcryptjs.hashSync(password, 10)
  // const hashePassword = bcryptjs.hashSync(conformpassword, 12)
  const newUser = new Student ({ firstname,lastname, email, password: hashedPassword})
  try {
    await newUser.save()
    res.status(201).json("User created successfully")

  } catch (error) {
    next(errorHandler(550, 'error from the function'))
  }
};


export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try{
    const validUser = await Student.findOne({ email })
    const validAdmin = await Admin.findOne({ email })
    if (validUser){
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'Wrong credentials'))
      const token = jwt.sign({id: validUser._id }, process.env.JWT_SECRET_KEY)
      const { password: pass, ...rest } = validUser._doc
      res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest)
    } 
    if(!validAdmin) return next(errorHandler(404, "Admin not found"));
    const validPassword = bcryptjs.compareSync(password, validAdmin.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials'))
    const token = jwt.sign({id: validAdmin._id }, process.env.JWT_SECRET_KEY)
    
    const { password: pass, ...rest } = validAdmin._doc
    res
    .cookie('access_token', token, { httpOnly: true })
    .status(200)
    .json(rest)
  } catch (error){
    next(error)
  }
}

