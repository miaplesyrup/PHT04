const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  yearLevel: { type: String, required: true },
  course: { type: String, required: true },
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;