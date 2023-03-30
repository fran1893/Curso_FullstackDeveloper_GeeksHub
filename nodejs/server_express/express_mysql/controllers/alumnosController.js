const Alumno = require("../models/alumno");

const alumnoController = {};

alumnoController.getAll = (req, res, next) => {
  let { page } = req.query;
  page = +page || 1;

  Alumno.fetchAll((error, data) => {
    if (error) {
      return res.status(500).json({
        success: false,
        message: "Error Retreiving students",
        error: error.message || error,
      });
    }
    res.status(200).json({
      success: true,
      message: "Get all students retreiving succesfully",
      page: page,
      limit: data.length,
      results: data,
    });
  }, page);
};

module.exports = alumnoController;
