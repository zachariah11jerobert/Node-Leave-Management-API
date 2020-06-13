const router = require('express').Router();
let Leave = require('../models/leave.model');

router.route('/').get((req, res) => {
  Leave.find()
    .then(leaves => res.json(leaves))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const applierId = req.body.applierId;
  const applyingDate = Date.parse(req.body.applyingDate);
  const leaveTypeId = req.body.leaveTypeId;
  const leaveStartDate = Date.parse(req.body.leaveStartDate);
  const leaveEndDate = Date.parse(req.body.leaveEndDate);
  const reasonForLeave = req.body.reasonForLeave;

  const newLeave = new Leave({
    applierId,
    applyingDate,
    leaveTypeId,
    leaveStartDate,
    leaveEndDate,
    reasonForLeave
  });

  newLeave.save()
  .then(() => res.json('Leave Applied Successfully !'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Leave.findById(req.params.id)
    .then(leave => res.json(leave))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Leave.findByIdAndDelete(req.params.id)
    .then(() => res.json('Leave deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  Leave.findById(req.params.id)
    .then(leave => {
      leave.applierId = req.body.applierId;
      leave.applyingDate = Date.parse(req.body.applyingDate);
      leave.leaveStartDate = Date.parse(req.body.leaveStartDate);
      leave.leaveEndDate = Date.parse(req.body.leaveEndDate);
      leave.reasonForLeave = req.body.reasonForLeave;

      leave.save()
        .then(() => res.json('Leave updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;