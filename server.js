const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/lms";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const leavesRouter = require('./routes/leaves');
const employeesRouter = require('./routes/employees');
const leavetypesRouter = require('./routes/leaveTypes');
const departmenttypesRouter = require ('./routes/departmentType')

app.use('/leaves', leavesRouter);
app.use('/employees', employeesRouter);
app.use('/leavetypes', leavetypesRouter);
app.use('/departmenttypes',departmenttypesRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
