var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../passport')
router.get('/login', function(req, res, next) {
    res.render('login', {
        name: "peter"
    })
})
router.post('/login', passport.authenticate('local',{
    successRedirect:'/session',
    failureRedirect: '/'
}))
module.exports = router;