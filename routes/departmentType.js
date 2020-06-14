const router = require('express').Router();
let DepartmenType= require('../models/departmentType.model');


router.route('/').get((req,res)=>{
    DepartmenType.find()
    .then(departmenttype=>res.json(departmenttype))
     .catch(err=>res.status(400).json('Error'+err));

});

router.route('/add').post((req,res)=>{
    const departmentType=req.body.departmentType;

    const newDepartmentType= new DepartmenType({
        departmentType
    });
    newDepartmentType.save()
    .then(() => res.json('New Department Type Added Succefully!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.router('/:id').get((req, res) =>{
    DepartmenType.findById(req.params.id)
    .then(departmenttype => res.json(departmenttype))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').delete((req, res) => {
    DepartmenType.findByIdAndDelete(req.params.id)
      .then(() => res.json('Department Type deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').put((req, res) => {
    DepartmenType.findById(req.params.id)
    .then(departmenttype => {
      departmenttype.departmenType = req.body.departmenType;
  
      departmenttype.save()
          .then(() => res.json('department Type updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
    });

    module.exports = router;