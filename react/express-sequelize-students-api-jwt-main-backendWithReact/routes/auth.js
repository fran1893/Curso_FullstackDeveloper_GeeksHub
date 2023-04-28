const express = require("express");
const router = express.Router();
const authController = require("../controllers/authorization");

/**
 * End-points alumnos
 */

// registrar un alumno
router.post("/register/alumno", authController.registerAlumno);

// login user
router.post("/login", authController.login);

module.exports = router;
