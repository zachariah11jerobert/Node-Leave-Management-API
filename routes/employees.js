const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
  Employee.find()
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const employeeId = req.body.employeeId;
  const employeeName = req.body.employeeName;
  const occupationId = req.body.occupationId;
  const departmentId = req.body.departmentId;
  const dateOfBirth = Date.parse(req.body.dateOfBirth);

  const newEmployee = new newEmployee ({
    employeeId,
    employeeName,
    occupationId,
    departmentId,
    dateOfBirth
  });

  newEmployee.save()
    .then(() => res.json('Employee Added Succefully!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json('Employee deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Employee.findById(req.params.id)
  .then(employee => {
    employee.employeeId = req.body.employeeId;
    employee.employeeName = req.body.employeeName;
    employee.occupationId = req.body.occupationId;
    employee.departmentId = req.body.departmentId;
    employee.dateOfBirth = Date.parse(req.body.dateOfBirth);

    employee.save()
        .then(() => res.json('Employee updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;