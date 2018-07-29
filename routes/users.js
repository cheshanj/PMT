const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

//register user
router.post("/register", (req, res) => {

    //res.send("REGISTER");

    let newUser = new User({


        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role


    });

    //user add function
    User.addUser(newUser, (err, user) => {

        if (err) {

            res.json({ state: false, msg: "fail" });
        }
        if (user) {


            res.json({ state: true, msg: "success" });

        }

    });

});


//user login function

router.post("/login", (req, res) => {

    // res.send("LOGIN");

    const username = req.body.username;
    const password = req.body.password;

    //find user using username
    User.getUserByUsername(username, (err, user) => {

        if (err) throw err;

        if (!user) {

            return res.json({ state: false, msg: "User not found" });
            //console.log(user);
        }
        //password checking
        User.passwordCheck(password, user.password, (err, isMatch) => {

            if (err) throw err;
            if (isMatch) {

                const token = jwt.sign(user.toJSON(), config.secret, {

                    expiresIn: 7200 // seconds for two hours
                });

                res.json({

                    state: true,
                    token: "JWT " + token,
                    user: {

                        id: user._id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        username: user.username,
                        email: user.email
                    }

                });

            } else {

                return res.json({ state: false, msg: "Wrong Password!" });
            }

        });
    });

});


//user profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {

    res.json({ user: req.user });

    //res.send("profile");

}
);

router.get("/list", (req, res) => {

    res.send("LIST");

});

//update the user
router.put("/update", (req, res) => {

    res.send("UPDATE");

    User.findByIdUpdate(req.body.id,
        {
            set: {
                firstname: req.body.firstname,
                username: req.body.username,

            }
        },
        {
            new: true
        },
        function (err, updateUser) {
            if (err) {
                res.send("Cannot update this user.Please try again!");
            } else {
                res.json(updateUser);
            }
        }

    )

});


router.get("/count", (req, res) => {

    res.send("COUNT");

});

//delete a user
router.delete("/:id", (req, res) => {

    var id = req.params.id;
    // res.send("DELETE");

    // User.findByIdDelete(req.params.id, function(err,deletedUser){
    //         if(err){
    //             res.send( msg = "Cannot delete this user.Please try again!");
    //         }else{

    //             res.json({
    //                 state:true,msg:"Success"

    //             });



    //         }
    //     }

console.log(id)
    User.findByIdAndRemove(id)
        .exec()
        .then(doc => {
            if (doc) {
                res.json({success: true, message: "User has been deleted."})
            }
            else {
                res.json({success: false, message: "User cannot delete!"})
            } 
        }
    )
});



module.exports = router;