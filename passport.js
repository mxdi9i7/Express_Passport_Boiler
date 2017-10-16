var mongojs = require('mongojs')
var db = mongojs('mongodb://localhost:27017/social');
var usersCollection = db.collection('users')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy(authenticate))

function authenticate(email, password, done) {
    // done(null, false)
    // done(null, user)
    usersCollection.findOne({email: email}, function(err, user) {
        if (err) {
            return err
        }
        if (!user) {
            console.log('User doesnt exist')
            done(null, false)
        }
        if (user.pass !== password) {
            console.log('wrong password!')
            done(null, false)
        }
        console.log('found user')
        done(null, user)
    })
}

passport.serializeUser(function(user, done) {
    done(null, user._id)
})

passport.deserializeUser(function(id, done) {
    usersCollection.findOne({_id: mongojs.ObjectId(id)}, function(err, user) {
        done(null, user)
    })
})