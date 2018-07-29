const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config  = require('../config/database');

// user schema

const UserSchema = mongoose.Schema({

   firstname:{type:String,required: true},
   lastname: {type:String,required: true},
   username: {type:String,required: true},
   email: {type:String,required: true},
   password: {type:String,required: true},
   role: {type:String,required: true}

});

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function (id, callback) {


    User.findById(id,callback);

}

module.exports.getUserByUsername = function (username, callback) {

    const query = {username: username}
    User.findOne(query, callback);

}

// module.exports.getUserByUsername = function (username, callbcak) {
//
//     const query = {username: username}
//     User.findOne(query, callback);
// }


module.exports.addUser = function (newUser, callback) {

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {

            newUser.password = hash;
            newUser.save(callback);
            if(err) throw err;

        });
    });

}

module.exports.passwordCheck = function (candidatePassword,hash,callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {


        if(err)throw err;

        if(isMatch){

            callback(null,isMatch);


        }

    });
}

// module.exports.findUserById = function () {
//
//
//     User.findOne(id,callback);
//
//
// }