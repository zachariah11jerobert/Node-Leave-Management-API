const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departmentTypeSchema = new Schema({
    departmentType :{type:String, required:true},
    departmentId :{type:String,required:true},
},{
    timestamps:true,
});
const DepartmemtType = mongoose.model('DepartmentType',departmentTypeSchema);

module.exports=DepartmemtType;