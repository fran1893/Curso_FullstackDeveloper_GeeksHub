const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const alumnosRouter = require("./routes/alumnos");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");

// home page
router.use("/", indexRouter);

// alumnos
router.use("/api/alumnos", alumnosRouter);

// users
router.use("/api/users", usersRouter);

// authorization
router.use("/auth", authRouter);

module.exports = router;
