import mongoose from "mongoose";
const TodolistSchema = new mongoose.Schema({

  name: String,
  Description : String,
  IsCompleted: Boolean
})

export const Todolist  = mongoose.model('Todolist' , TodolistSchema)