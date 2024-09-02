import mongoose from "mongoose";

const studentScheme = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
})

const studentModel = mongoose.model('Student', studentScheme)
export {studentModel as Student}