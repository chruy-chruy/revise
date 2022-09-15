const express = require("express");
const router = express.Router();

//controller student
const studentController = require("../controllers/controllerStudent");

const verifyToken = require("./verifyToken");

//home
router.get("/", studentController.home);

//get all
router.get("/student", verifyToken, studentController.getAll);

//POST login
router.post("/login", studentController.login);

//get by ID
router.get("/student/:id", verifyToken, studentController.getById);

//POST add Student
router.post("/student/add", verifyToken, studentController.addStudent);

//PUT add Student
router.put("/student/update/:id", verifyToken, studentController.updateStudent);

//DELETE  Student
router.delete("/student/delete/:id", verifyToken, studentController.deleteStudent);


module.exports = router;