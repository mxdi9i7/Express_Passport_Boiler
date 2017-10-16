var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/social');
var usersCollection = db.collection('users')

/* GET home page. */
router.get('/', function(req, res, next) {
  usersCollection.find({}, function(err, users) {
    res.render('index', { 
      title: 'Express',
      name: 'Peter',
      users: users
    });
  })
})
router.get('/session', function(req, res, next) {
  res.send(req.session)
})
router.get('/set', function(req, res, next) {
  req.session.name = "Ethan"
  res.redirect('/session')
})

module.exports = router;
