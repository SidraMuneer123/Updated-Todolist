import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 3000;
import { Todolist } from './Todo.js';

const a = await mongoose.connect("mongodb://localhost:27017/");

//Adding new todo in the list

app.get('/',(req , res)=>{
  const todo = new Todolist({id:1, name:'Do the Homework' , Description : "I have to complete my homework" , IsCompleted : false})
  todo.save();
  res.json(todo)
})

//Adding other todo in list

app.get('/todo',(req , res)=>{
  const todo = new Todolist({id:1, name:'Go to Gym' , Description : "I have to go to gym" , IsCompleted : true})
  todo.save();
  res.json(todo)
})

 //get all todos

 app.get('/alltodo' , async (req , res)=>{
  const todo =  await Todolist.find();
  
  res.json(todo);
 } )

 //get the single todo by id


 app.get('/todos/:id', async (req, res) => {
  
      const todo = await Todolist.findById(req.params.id);
      
      res.send(todo);
  
});

//Delete the todo by id

app.delete('/dele/:id' , async (req , res) => {
  const deltodo = await Todolist.findByIdAndDelete(req.params.id);
  res.send(deltodo)
})

//update the todo by id

app.patch('/update/:id' , async (req , res)=>{
  const updateid = req.params.id;
  const update = req.body;

  const todo = await Todolist.findByIdAndUpdate(updateid , update , {new : true , runValidators : true})
  res.send(todo)
})



app.listen(port , ()=>{
  console.log(`The server is running at port http://localhost:${port}`)
})