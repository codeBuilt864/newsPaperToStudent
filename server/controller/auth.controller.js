import { Student } from "../models/Student.js";
import { errorHandler } from "../utils/error.js";
import bcryptsjs from 'bcrypt'

export const signup = async (req, res, next) => {
// console.log(req.body);
  const { firstname,lastname, email, password } = req.body
  const hashedPassword = bcryptsjs.hashSync(password, 10)
  // const hashePassword = bcryptsjs.hashSync(conformpassword, 12)
  const newUser = new Student ({ firstname,lastname, email, password: hashedPassword})
  try {
    await newUser.save()
    res.status(201).json("User created successfully")

  } catch (error) {
    next(errorHandler(550, 'error from the function'))
  }
};


// export const signin = async (req, res, next) => {
//   const { email, password } = req.body;
//   try{
//     const validUser = await User.findOne({ email });
//     if (!validUser) return next(errorHandler(404, 'User not found'))
//     const validPassword = bcryptjs.compareSync(password, validUser.password);
//     if (!validPassword) return next(errorHandler(401, 'Wrong credentials'))
//     const token = jwt.sign({id: validUser._id }, process.env.JWT_SECRET_KEY)
//     const { password: pass, ...rest } = validUser._doc
//     res
//     .cookie('access_token', token, { httpOnly: true })
//     .status(200)
//     .json(rest)
//   } catch (error){
//     next(error)
//   }
// }
