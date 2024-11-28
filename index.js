require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/home",(req,res)=>{
    res.send("my home page")
})

app.get("/login",(req,res)=>{
    res.send("<h1>this is login page</h1>")
})

app.get("/sign",(req,res)=>{
    res.send("<h1>this is sign up page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

