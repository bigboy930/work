
const db = require('./db');
const bcrypt = require('bcrypt');

module.exports = function(app){
  var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    console.log('serial : ', user)
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    var user = db.get('users').find({id:id}).value();
    console.log('user : ', user)
    done(null, user);
  });

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
    function(username, password, done) {
      console.log('bbbbbbbbbbbbb :', username, password)
      return done(null, { name: 'aaad'})
    }
  ));


  return passport;
}

