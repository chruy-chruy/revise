const express = require("express");
const router = express.Router();

//controller student
const studentController = require("../controllers/controllerStudent");

//home
router.get("/", studentController.home);

//get all
router.get("/student", verifyToken, studentController.getAll);

//POST login
router.post("/login", verifyToken, studentController.login);

//get by ID
router.get("/student/:id", verifyToken, studentController.getById);

//POST add Student
router.post("/student/add", verifyToken, studentController.addStudent);

//PUT add Student
router.put("/student/update/:id", verifyToken, studentController.updateStudent);

//DELETE  Student
router.delete("/student/delete/:id", verifyToken, studentController.deleteStudent);

//verify token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

module.exports = router;