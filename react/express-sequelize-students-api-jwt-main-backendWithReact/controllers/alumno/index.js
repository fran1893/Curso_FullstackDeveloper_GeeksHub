const alumnoController = {};

alumnoController.getAll = require("./getAll");
alumnoController.getById = require("./getById");
alumnoController.getByName = require("./getByName");
alumnoController.updateProfile = require("./updateProfile");
alumnoController.getProfile = require("./getProfile");

module.exports = alumnoController;
