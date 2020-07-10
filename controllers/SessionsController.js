const User = require('../models/user');
const passport = require('passport');
const viewPath = 'sessions';

// Step 1: Add the login logic
exports.new = (req, res) => {
    res.render(`${viewPath}/new`, {
        pageTitle: 'Login'
    });
};

// Step 2: Add the authentication logic
exports.create = (req, res, next) => {
    //local is the thing you want to authenticate using
    passport.authenticate('local', {
        successRedirect: '/plans',
        successFlash: 'Login in successful',
        failureRedirect: '/login',
        failureFlash: 'Invalid Credentials'
        //passport.authenticate sends back a function defination
    })(req, res, next);
};

// Step 3: Add the logout logic
exports.delete = (req, res) => {
    req.logout();
    req.flash('success', 'Log out successful');
    res.redirect('/');
}