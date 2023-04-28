const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin");

/**
 * End-points users
 */

// obtener todos los usuarios
router.get("/", verifyToken, isAdmin, userController.getAll);

module.exports = router;
