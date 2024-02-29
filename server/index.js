const express = require('express')
const mongoose = require('mongoose')

const dotenv = require("dotenv");
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.DB).then(() => {
    console.log("Connected to the database")
}).catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
