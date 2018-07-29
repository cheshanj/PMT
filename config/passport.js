const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('./database');
const User = require('../models/user')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
opts.secretOrKey = config.secret;

module.exports = function (passport) {


    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {

        console.log(jwt_payload);

        User.getUserById(jwt_payload._id, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));

}