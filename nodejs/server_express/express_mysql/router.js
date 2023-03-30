const express = require("express");
const router = express.Router();
const indexRouter = require("./routes/index");
const alumnosRouter = require("./routes/alumnos");

// Home Page
router.use("/", indexRouter);

// Users
router.use("/alumnos", alumnosRouter);

module.exports = router;
