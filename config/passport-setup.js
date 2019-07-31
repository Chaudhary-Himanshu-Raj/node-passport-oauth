const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
    new GoogleStrategy({
        // Options for the google startegy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        console.log("Passport callback is triggered here...");
        console.log(profile);
        new User({
                google_id: profile.id,
                username: profile.displayName
            }).save()
            .then((newUser) => {
                console.log('new user created: ', newUser);
            });
    })
);