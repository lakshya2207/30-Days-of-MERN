
const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs");
app.use(express.static('./public'))

app.get("/error", function(req,res,next){
    throw Error("Site not Working !!!");
})

app.get('/', (req, res) => {
  res.render("index",{location:"India"})
})
app.get('/leave', (req, res) => {
  res.render("checkout")
})

app.use(function errorHandler (err, req, res, next) {
        res.status(500)
        res.render('error', { error: err })
      })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})