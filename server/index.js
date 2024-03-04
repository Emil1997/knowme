const express = require('express')
const mongoose = require('mongoose')

const dotenv = require("dotenv");
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

// Routes
const postRoute = require('./routes/Post')
const categoryRoute = require('./routes/Category')

mongoose.connect(process.env.DB).then(() => {
    console.log("Connected to the database")
}).catch((err) => {
    console.log(err)
})

// Middleware
app.use(express.json())
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})