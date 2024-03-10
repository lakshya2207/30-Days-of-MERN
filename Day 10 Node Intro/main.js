// const fs=require("fs");
// console.log(fs);

// console.log("starting...");
// // fs.writeFileSync("message.txt","30 Days of MERN Stack");
// fs.writeFile("message2.txt","30 Days of MERN Stack",()=>{
//     console.log("Ban gyi file");
//     fs.readFile("message.txt",(error,data)=>{
//         console.log(error,data.toString())
//     })
// });

// console.log("done");

// fs.appendFile("message.txt","Day 10",(error,data)=>{
//     console.log(error,data)
// })

import fs from "fs/promises"
const a = await fs.readFile("message.txt");
const b = await fs.appendFile("message.txt", "\n\n\n hi");
console.log(a.toString());
console.log(fs);