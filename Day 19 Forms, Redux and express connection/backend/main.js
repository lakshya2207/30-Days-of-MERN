import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'
const port = 3000

app.use(cors())
app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// //   console.log(req.form)
// })
app.post('/', (req, res) => {
    console.log(req.body)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})