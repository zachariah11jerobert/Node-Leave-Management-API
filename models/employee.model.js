const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeId: { type: String, required: true },
  employeeName: { type: String, required: true },
  occupationId: { type: String, required: true },
  departmentId: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
}, {
  timestamps: true,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;