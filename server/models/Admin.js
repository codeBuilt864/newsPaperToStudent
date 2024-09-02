import mongoose from "mongoose";

const adminScheme = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
})

const adminModel = mongoose.model('Admin', adminScheme)
export {adminModel as Admin}