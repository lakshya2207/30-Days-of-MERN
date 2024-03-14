import mongoose from "mongoose";
import express from 'express';
import { Todo } from "./models/Todo.js";

await mongoose.connect("mongodb://localhost:27017/day14")
const app = express()
const port = 3000


// send
// app.get('/', (req, res) => {
//     const task = new Todo({
//         title: "Mongo",
//         des: "learnign about mongoose",
//         isDone: false,
//         days:Math.floor(Math.random()*10)
//     })
//     task.save()
//     res.send('Hello World!')
// })

// find
app.get('/', async(req, res) => {
    const task = await Todo.findOne({})
    // res.send('Hello World!')s
    res.json({title:task.title,status:task.isDone});
    console.log(task);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})