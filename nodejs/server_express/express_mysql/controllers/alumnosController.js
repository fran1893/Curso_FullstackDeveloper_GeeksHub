const Alumno = require("../models/alumno");

const getPagesFromCount = (count) => Math.round(count / Alumno.LIMIT);

const alumnoController = {};

alumnoController.getAll = async (req, res, next) => {
  let { page } = req.query;
  page = +page || 1;

  try {
    const count = await Alumno.getCount();
    const maxPages = getPagesFromCount(count);

    if (page > maxPages) {
      res.status(422).json({
        success: "False",
        message: `Page must be less or equal to ${maxPages}`,
      });
    } else {
      const data = await Alumno.fetchAll(page);

      res.status(200).json({
        info: {
          success: true,
          message: "Get all students retreiving succesfully",
          limit: data.length,
          total_results: count,
          page: page,
          total_pages: maxPages,
        },

        results: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Retreiving students",
      error: error.message || error,
    });
  }

  // Alumno.getCount((error, data) => {
  //   if (error) {
  //     return res.status(500).json({
  //       success: false,
  //       message: "Error Retreiving students",
  //       error: error.message || error,
  //     });
  //   }

  //   let count = data[0].count;
  //   const maxPages = Math.round(count / Alumno.LIMIT);

  //   if (page > maxPages) {
  //     res.status(422).json({
  //       success: "False",
  //       message: `Page must be less or equal to ${maxPages}`,
  //     });
  //   }
  // });

  // Alumno.fetchAll((error, data) => {
  //   if (error) {
  //     return res.status(500).json({
  //       success: false,
  //       message: "Error Retreiving students",
  //       error: error.message || error,
  //     });
  //   }
  //   res.status(200).json({
  //     success: true,
  //     message: "Get all students retreiving succesfully",
  //     page: page,
  //     limit: data.length,
  //     results: data,
  //   });
  // }, page);
};

module.exports = alumnoController;
