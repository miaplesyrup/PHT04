const Student = require("../models/student");

// Create Student
const createStudent = async (req, res) => {
  const { firstName, lastName, yearLevel, course } = req.body;

  try {
    const student = await Student.create({
      firstName,
      lastName,
      yearLevel,
      course,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read - Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      count: students.length,
      students,
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read - Get specific student
const getStudent = async (req, res) => {
  const {id} = req.params;

  try {
    const student = await Student.findById({_id: id});

    if (!student) {
      res.status(404).json({ error: "No student found."})
    };

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Student
const updateStudent = async (req, res) => {
  const {id} = req.params;

  try {
    const student = await Student.findByIdAndUpdate(
      {_id: id},
      {...req.body},
      {new: true,
      runValidators: true}
    );

    if (!student) {
      res.status(404).json({ error:  "No matching student found "})
    }

    res.status(200).json({ message: "The post has been successfully updated.", student})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Student
const deleteStudent = async (req, res) => {
  const {id} = req.params;
  try {
    const student = await Student.findByIdAndDelete({_id: id});

    if (!student) {
      res.status(404).json({
        error: "No matching student found"
      });
    }
    res.status(200).json({
      message: "The student record has been successfully deleted."
    });
  } catch {
    res.status(400).json({ error: error.message });
  }
}


module.exports = { createStudent, getAllStudents, getStudent, updateStudent, deleteStudent };