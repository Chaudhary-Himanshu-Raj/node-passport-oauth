const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();

//Setting up view engine
app.set('view engine', 'ejs');

// Setting up cookies for user
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// Setting up passport for initialization
app.use(passport.initialize());
app.use(passport.session());

// Setting up mongoDb for conncetion
mongoose.connect(keys.mongodb.mongodbURI, () => {
    console.log("connected to mongoDB");
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Create a home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});

app.listen(3000, () => {
    console.log("App server started and is now listening on PORT:3000");
});