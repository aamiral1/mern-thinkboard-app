import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        require: true
    },
    
    content: {
        type: String,
        require: true
    }
},
{ timestamps: true})

export const Note = new mongoose.model("Note", noteSchema);