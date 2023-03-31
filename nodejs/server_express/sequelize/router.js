const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const alumnosRouter = require("./routes/alumnos");

// Home page
router.use("/", indexRouter);

// Users Page
router.use("/alumnos", alumnosRouter);

module.exports = router;
