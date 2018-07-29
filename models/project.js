const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require ('../config/database');

// project schema

const ProjectSchema = mongoose.Schema({

    projectname:{type:String,required: true},
    description: {type:String,required: true},
    projectleader: {type:String,required: true},
    category: {type:String,required: true}


});


const Project = module.exports = mongoose.model('Project',ProjectSchema);

module.exports.getProjectById = function (id, callback) {


    Project.findById(id,callback);

};

module.exports.addProject = function (newProject, callback) {

    newProject.save(callback);

};

