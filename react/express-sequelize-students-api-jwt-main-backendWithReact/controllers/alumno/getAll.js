const { Alumno, Nacionalidad, Direccion, User } = require("../../models");
const { getPagesFromCountLimit, normalizePage } = require("../../_util/util");
const {
   sendSuccessResponse,
   sendErrorResponse,
} = require("../../_util/sendResponse");
const { errorMsg } = require("../../_util/messages");
const { user } = require("../../config/global");

const LIMIT = user.paginationLimit;

/**
 * Obtener todos los alumnos con paginacion.
 * Ejemplo url: [GET] http://localhost:3000/api/alumnos?page=2
 * @param {*} req    Request object
 * @param {*} res    Response object
 */
module.exports = async (req, res) => {
   let { page } = req.query;
   try {
      const count = await Alumno.count();
      const pages = getPagesFromCountLimit(count, LIMIT);
      page = normalizePage(page, pages);

      const alumnos = await Alumno.findAll({
         limit: LIMIT,
         offset: (page - 1) * LIMIT,
         attributes: {
            exclude: [
               "id_nacionalidad",
               "id_direccion",
               "id_user",
               "createdAt",
               "updatedAt",
            ],
         },

         include: [
            {
               model: User,
               as: "usuario",
               attributes: ["nombre", "apellidos"],
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
      sendSuccessResponse(res, 200, {
         info: {
            total_results: count,
            limit_results: alumnos.length,
            page: page,
            total_pages: pages,
         },
         results: alumnos,
      });
   } catch (error) {
      sendErrorResponse(res, 500, errorMsg.user.GETALL, error);
   }
};
