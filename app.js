const express =  require('express');
const path = require("path");
const bodyparser = require("body-parser");
const  cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database');


//establish the conntion with mongo db
mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{

console.log("connected to database"+config.database);

});

mongoose.connection.on('error',(err)=>{

    console.log("database error!"+err);

});

//express conncet to the application
const app =  express();

//passport middleware

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


//routes
const users = require('./routes/users');
const projects = require('./routes/projects');


//node server port
const port = 8000;

//cors middleware
app.use(cors());

//static directory
app.use(express.static(path.join(__dirname,'public')));

//bodypaser middleware
app.use(bodyparser.json());






app.use('/users',users);
app.use('/projects',projects);


 app.get('/',function (req,res) {

     res.send("Welcome!");

 });
app.listen(port,function () {
    console.log("server started!"+port);
});
