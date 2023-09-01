// Do npm init, which would create a projectDir with package.json
// Do npm i express, which would install the dependencies required for express.
const express = require("express")
const app = express()

//! Define the Port
const port = 7000


// app.get('/signUp', signUpmethod)

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

//! 1. Starting the server
app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})