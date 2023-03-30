const express = require("express");
const router = express.Router();
const alumnoController = require('../controllers/alumnosController');

/* GET students listing. */
router.get("/", alumnoController.getAll);
// router.get("/", alumnoController.getById);

module.exports = router;
