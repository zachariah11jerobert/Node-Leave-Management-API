const router = require('express').Router();
let LeaveType = require('../models/leaveType.model');

router.route('/').get((req, res) => {
  LeaveType.find()
    .then(leavetype => res.json(leavetype))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const leaveType = req.body.leaveType;

    const newLeaveType = new LeaveType ({
      leaveType
    });

    newLeaveType.save()
    .then(() => res.json('New Leave Type Added Succefully!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    LeaveType.findById(req.params.id)
      .then(leavetype => res.json(leavetype))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    LeaveType.findByIdAndDelete(req.params.id)
      .then(() => res.json('LeaveType deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').put((req, res) => {
    LeaveType.findById(req.params.id)
    .then(leavetype => {
      leavetype.leaveType = req.body.leaveType;
  
      leavetype.save()
          .then(() => res.json('Leave Type updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
    });

    module.exports = router;