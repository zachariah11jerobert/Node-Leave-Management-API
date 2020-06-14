const mongoose = require('mongoose');

const Schema = moongoose.Schema;

const departmentTypeSchema = new Schema({
    departmentType :{type:String, required:true},
},{
    timestamps:true,
});
const DepartmemtType = mongoose.model('DepartmentType',departmentTypeSchema);

module.exports=DepartmemtType;