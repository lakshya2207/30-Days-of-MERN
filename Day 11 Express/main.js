const express = require('express')
const app = express()
const port = 3000

const blog = require('./routes/blog')

// ...

app.use('/blog', blog)


app.use(express.static("public"))
// app.get , .put, .post, .delete(path,handler)

app.get('/', (req, res) => {
    console.log("hey its a get request");
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About us')
})
app.get('/contact', (req, res) => {
    res.send('COntact me')
})
app.get('/end', (req, res) => {
    // console.log(req.params);
    res.send('<h1>thanks for the time</h1>')
})



app.get('/ls/:slug', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    // console.log(req);
    res.send(`hello ${req.params.slug}`)
})


//for URL = http://localhost:3000/ls/lakshya?mode=dark&region=in
// { slug: 'lakshya' }
// { mode: 'dark', region: 'in' }

app.get('/index2', (req, res) => {
    console.log("hey its index2");
    res.send('COntact me i2');
})

// post ,put,delete

app.post('/', (req, res) => {
    console.log("hey its a post request");
    res.send('COntact me');
})
app.put('/', (req, res) => {
    console.log("hey its a put request");
    res.send('helllo put');
})
app.delete('/', (req, res) => {
    console.log("hey its a delete request");
    res.send('helllo delete ');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})