const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const passport = require('../config/passport');
//create a project
router.post('/createProject',(req,res)=>{

   let newProject = new Project({


       projectname:req.body.projectname,
       description:req.body.description,
       projectleader:req.body.projectleader,
       category:req.body.category


   }) ;

//add project function
   Project.addProject(newProject,(err,project)=>{

      if(err){
          res.json({state:false,msg:"fail"});

      }else{

          res.json({state:true,msg:"success"});
      }


   });

});

// router.get('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
//     Project.getAllProjects(req.user, (err, projects) => {
//         if (err) {
//             res.json({ success: false, message: "Getting projects failed" })
//         } else {
//             res.json(projects)
//             // res.render('/projects', { success: true, projects: projects })
//         }
        
//     })
// })

//listing all project function
router.post('/list',(req,res)=>{

    const projectId = req.body.projectId;

//get all project using id
Project.getProjectById(projectId,(err,project)=>{

    if(err) throw err;

    if(!project){

        res.json({state:false,msg:"fail"});

    }
    if(project){

        res.json({state:true,msg:"success"});
        return res.json(project);


    }

});

});

//update the project
router.put('/update',(req,res) => {


    Project.findByIdAndUpdate(req.body._id,
        {
            set:{ projectname:req.body.projectname,
                description:req.body.description,
                projectleader:req.body.projectleader,
                category:req.body.category
            }
        },
        {
            new :true
        },
        function(err,updateProject){
            if(err){
                res.send("Cannot Update te project details!");
            }else{
                res.json(updateProject);
            }
        }

    )

});


//delete the project
router.delete('/delete/:id',(req,res) => {


    Project.findByIdAndRemove(req.params.id,

        function(err,deleteProject){
            if(err){
                res.send("Cannot delete this project.Please try again!");
            }else{
                console.log('Project is delete!');
                res.json({
                    success:true,
                    deleteProject
                });



            }
        }

    )


});

module.exports = router;