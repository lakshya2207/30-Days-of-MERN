const express = require('express')
const app = express()
const port = 3000


// middleware is somethings that is build before routes, usak code pehe execute hota h

// req= user ka data
app.use(function(req,res,next){
    // console.log(req);
    console.log("lul");
    // console.log(req);
    // console.log("lul");
    // res.send('Hello World!')
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('Welcome HOme !!')
})


app.get('/home/:user', (req, res) => {
  res.send(`Welcome HOme ${req.params.user} !`)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
