const router = require('express').Router();
let DepartmentType= require('../models/departmentType.model');


router.route('/').get((req,res)=>{
    DepartmentType.find()
    .then(departmenttype=>res.json(departmenttype))
     .catch(err=>res.status(400).json('Error'+err));

});

router.route('/add').post((req,res)=>{
    const departmentType=req.body.departmentType;
    const departmentId=req.body.departmentId;

    const newDepartmentType= new DepartmentType({
        departmentType,
        departmentId
    });
    newDepartmentType.save()
    .then(() => res.json('New Department Type Added Succefully!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>{
    DepartmentType.findById(req.params.id)
    .then(departmenttype => res.json(departmenttype))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').delete((req, res) => {
    DepartmentType.findByIdAndDelete(req.params.id)
      .then(() => res.json('Department Type deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').put((req, res) => {
    DepartmentType.findById(req.params.id)
    .then(departmenttype => {
      departmenttype.departmentType = req.body.departmentType;
  
      departmenttype.save()
          .then(() => res.json('department Type updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
    });

    module.exports = router;