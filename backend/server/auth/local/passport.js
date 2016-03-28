import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

function localAuthenticate(User, username, password, done) {
console.log(username+' - '+password);    
  User.findOneAsync({
    username: username.toLowerCase()
  })
    .then(function(user) {
      if (!user) {
        return done(null, false, {
          message: 'El usuario no esta registrado.'
        });
      }
      user.authenticate(password, function(authError, authenticated) {
        if (authError) {
          return done(authError);
        }
        if (!authenticated) {
          return done(null, false, {
            message: 'La contraseña es incrorrecta.'
          });
        } else {
          return done(null, user);
        }
      });
    })
    .catch(function(err) {
      return done(err);
    });
}

exports.setup = function(User, config) {
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password' // this is the virtual field on the model
  }, function(username, password, done) {
    return localAuthenticate(User, username, password, done);
  }));
};
