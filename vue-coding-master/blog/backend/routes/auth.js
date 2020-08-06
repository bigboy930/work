const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const shortid = require('shortid');
const bcrypt = require('bcrypt');

module.exports = function(app, aaa){
  router.post('/signup', (req, res, next) =>  {
    const userInfo = req.body.params;
    bcrypt.hash(userInfo.userPwd, 10, function(err, hash) {
      const user = {
        id: shortid.generate(),
        userId: userInfo.userId,
        userPwd: hash,
      }
      db.get('users').push(user).write();
      res.send('');
    });
  });
  
  router.post('/signin', (req, res, next) =>  {
    console.log(aaa)
    aaa.authenticate('local', {
      successRedirect: '/bbb',
      failureRedirect: '/aaa',
      failureFlash: true,
      successFlash: true,
    });
  }, function(req, res){
    console.log('parsing')
  });

  return router;
}

