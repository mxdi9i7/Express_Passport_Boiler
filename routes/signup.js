var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/social');
var usersCollection = db.collection('users');

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { 
    title: 'Express',
    name: 'Peter' 
  });
});
router.post('/signup', function(req, res, next) {
    var newUser = req.body;
    usersCollection.save(newUser, function(err, doc){
        res.redirect('/login')
    })
})
module.exports = router;
