const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaveTypeSchema = new Schema({
    leaveType: { type: String, required: true },
}, {
    timestamps: true,
});

const LeaveType = mongoose.model('LeaveType', leaveTypeSchema);

module.exports = LeaveType;