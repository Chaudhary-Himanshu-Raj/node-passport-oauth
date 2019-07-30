const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        // Options for the google startegy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }), () => {

    }
);