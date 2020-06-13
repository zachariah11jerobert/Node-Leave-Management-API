const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaveSchema = new Schema({
  applierId: { type: String, required: true },
  applyingDate: { type: Date, required: true },
  leaveTypeId: { type: String, required: true },
  leaveStartDate: { type: Date, required: true },
  leaveEndDate: { type: Date, required: true },
  reasonForLeave: { type: String, required: true },
  
}, {
  timestamps: true,
});

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;