const express = require('express')
const mongoose = require('mongoose')

const dotenv = require("dotenv");
dotenv.config();

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

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