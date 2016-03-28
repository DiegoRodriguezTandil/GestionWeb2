'use strict';

import express from 'express';
import passport from 'passport';
import config from '../config/environment';
import User from '../api/user/user.model';

// Passport Configuration
require('./local/passport').setup(User, config);
passport.serializeUser(function(user, done){
  done(null,user._id);
});
passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
      done(err, user);
  });
});


var router = express.Router();

router.use('/local', require('./local'));

module.exports = router;
