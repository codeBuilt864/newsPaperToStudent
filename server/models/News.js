import mongoose from "mongoose";

const newsScheme = new mongoose.Schema({
    name: {type: String},
    imageUrl: {type: String, required: true},
})

const newsModel = mongoose.model('News', newsScheme)
export {newsModel as News}