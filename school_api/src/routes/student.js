const express = require("express");
const router = express.Router();
const { createStudent, getAllStudents, getStudent, updateStudent, deleteStudent } = require("../controllers/student");

// CRUD
router.post("/", createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);


module.exports = router;