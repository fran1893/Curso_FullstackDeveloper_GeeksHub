const { Alumno, Nacionalidad, Direccion, User } = require("../../models");
const {
   sendSuccessResponse,
   sendErrorResponse,
} = require("../../_util/sendResponse");
const { errorMsg } = require("../../_util/messages");

/**
 * Obtener alumno por id.
 * Ejemplo url: [GET] http://localhost:3000/api/alumnos/1
 * @param {*} req    Request object
 * @param {*} res    Response object
 */
module.exports = async (req, res) => {
   const { id } = req.params;
   console.log(id);

   try {
      const alumno = await Alumno.findByPk(id, {
         attributes: ["id", "activo"],

         include: [
            {
               model: User,
               as: "usuario",
               attributes: ["nombre", "apellidos", "email", "fecha_nacimiento"],
            },
            {
               model: Nacionalidad,
               as: "nacionalidad",
               attributes: ["id", "nombre_nacion"],
            },
            {
               model: Direccion,
               as: "direccion",
               attributes: {
                  exclude: ["createdAt", "updatedAt"],
               },
            },
         ],
      });

      if (alumno) sendSuccessResponse(res, 200, alumno);
      else sendErrorResponse(res, 404, errorMsg.user.NOTFOUND);
   } catch (error) {
      sendErrorResponse(res, 500, errorMsg.user.GET, error);
   }
};
