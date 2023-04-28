const { Alumno, User } = require("../../models");
const { Op } = require("sequelize");
const {
   sendSuccessResponse,
   sendErrorResponse,
} = require("../../_util/sendResponse");
const { errorMsg } = require("../../_util/messages");

/**
 * Obtener alumnos por nombre
 * Ejemplo url: [GET] http://localhost:3000/api/alumnos/nombre/Bob
 * @param {*} req    Request object
 * @param {*} res    Response object
 */
module.exports = async (req, res) => {
   const { name } = req.params;

   try {
      const alumnos = await Alumno.findAll({
         include: {
            model: User,
            as: "usuario",
            where: {
               nombre: { [Op.like]: `%${name}%` },
            },
            attributes: ["nombre", "apellidos", "email", "fecha_nacimiento"],
         },
         attributes: ["id", "activo", "id_nacionalidad", "id_direccion"],
      });

      if (alumnos.length > 0) sendSuccessResponse(res, 200, alumnos);
      else sendErrorResponse(res, 404, errorMsg.user.NOTFOUND);
   } catch (error) {
      sendErrorResponse(res, 500, errorMsg.user.GETALL, error);
   }
};
