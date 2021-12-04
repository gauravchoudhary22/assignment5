require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/router')
app.use(express.json())

app.use('/', routes)
var mongoURI = process.env.MONGO

mongoose.connect(mongoURI , {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});

app.listen(3000, () => {
    console.log('Server running at 3000')
})
