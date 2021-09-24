import express from "express"
import fs from "fs"

const app = express()
const port = 3000

app.use(express.json())


app.get('/', (req, res) => {
  res.send({ test: "why yes indeed it did work" })
})

app.post('/api/user', (req, res) => {
  const user = req.body
  console.log(user)

  res.sendStatus(200)
})

app.get('/api/user/:id', (req, res) => {
  // database.getUserById(req.params.id)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})