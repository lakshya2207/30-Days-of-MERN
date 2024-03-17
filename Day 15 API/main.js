import mongoose from "mongoose";
import express from 'express';
// import { Birthdays } from "./models/Birthdays.js";

await mongoose.connect("mongodb://localhost:27017/first")
const app = express()
const port = 5000

const User = mongoose.model('test1', { 
    name: String , 
    dob: String  
}); 

// // sends
// app.get('/', (req, res) => {
//     const task = new Birthdays({
//         name: "Mongo",
//         des: "learnign about mongoose",
//         isDone: false,
//         days:Math.floor(Math.random()*10)
//     })
//     task.save()
//     // res.send('Hello World!')
// })

// find
app.get('/username/:slug', async(req, res) => {

    
    const task = await User.findOne({name : capatalize(req.params.slug)})
    
    console.log(task);
    res.send(`${task.name + task.dob}`)
    // res.send({name:task.name,status:task.isDone});
    // console.log(req.params.slug,req.query);
    // console.log(task.name,task.dob);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})


function capatalize(str){
    return  str.charAt(0).toUpperCase() + str.slice(1);
}