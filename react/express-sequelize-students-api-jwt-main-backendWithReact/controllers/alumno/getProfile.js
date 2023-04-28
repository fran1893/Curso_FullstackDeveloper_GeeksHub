const { Alumno, Nacionalidad, Direccion, User } = require("../../models");
const {
   sendSuccessResponse,
   sendErrorResponse,
} = require("../../_util/sendResponse");
const { errorMsg } = require("../../_util/messages");

/**
 * Obtener alumno por id (token)
 * Ejemplo url: [GET] http://localhost:3000/api/alumnos/profile
 * @param {*} req    Request object
 * @param {*} res    Response object
 */
module.exports = async (req, res) => {
   const id = req.userId; // get user id from token
   console.log("req: " + req);

   try {
      const alumno = await Alumno.findOne({
         attributes: ["id", "activo"],
         include: [
            {
               model: User,
               as: "usuario",
               where: {
                  id: id,
               },
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
      sendErrorResponse(res, 500, errorMsg.user.GETONE, error);
   }
};
