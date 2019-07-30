const router = require('express').Router();

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logut
router.get('/logout', (req, res) => {
    // Handle with passport.js
    res.send("logging out");
});

//auth with google
router.get('/google', (req, res) => {
    // Handle with passport.js
    res.send("logging in with google");
});

module.exports = router;