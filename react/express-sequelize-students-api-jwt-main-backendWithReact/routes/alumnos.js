const express = require("express");
const router = express.Router();
const alumnoController = require("../controllers/alumno");
const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin");
/**
 * End-points alumnos
 */

// obtener todos los alumnos
router.get("/", verifyToken, isAdmin, alumnoController.getAll);

// obtener alumno por id
router.get("/:id", verifyToken, isAdmin, alumnoController.getById);

// obtener alumno por nombre
router.get("/nombre/:name", verifyToken, isAdmin, alumnoController.getByName);

// obtener perfil alumno
router.get("/profile", verifyToken, alumnoController.getProfile);

// actualizar perfil alumno
router.put("/profile", verifyToken, alumnoController.updateProfile);

module.exports = router;
