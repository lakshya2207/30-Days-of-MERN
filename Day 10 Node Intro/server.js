if (false){

    console.log("Hello world !!!")
    const http = require('node:http');
    
    const hostname = '127.0.0.1';
    const port = 3000;
    
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
    
    //   for response type
    //   res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>Hello world !!! </h1>');
    });
    
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
}


// import {a,b,c} from "./mymodule.js";
// console.log(a,b,c);

// import obj from  "./mymodule.js";
// console.log(obj);


// without type : module in package.json

const a = require("./mymodule.js");
console.log(a);
