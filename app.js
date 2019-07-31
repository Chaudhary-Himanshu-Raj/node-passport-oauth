const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();

//Setting up view engine
app.set('view engine', 'ejs');

// Setting up mongoDb for conncetion
mongoose.connect(keys.mongodb.mongodbURI, () => {
    console.log("connected to mongoDB");
});

// set up routes
app.use('/auth', authRoutes);

// Create a home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log("App server started and is now listening on PORT:3000");
});