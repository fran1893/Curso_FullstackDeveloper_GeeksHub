const { Alumno, Nacionalidad, Direccion, User, Role } = require("../../models");
const { getPagesFromCountLimit, normalizePage } = require("../../_util/util");
const {
   sendSuccessResponse,
   sendErrorResponse,
} = require("../../_util/sendResponse");
const { errorMsg } = require("../../_util/messages");
const { user } = require("../../config/global");

const LIMIT = user.paginationLimit;

/**
 * Obtener todos los usuarios (incluido alumnos) con paginacion.
 * Ejemplo url: [GET] http://localhost:3000/api/users?page=2
 * @param {*} req    Request object
 * @param {*} res    Response object
 */
module.exports = async (req, res) => {
   let { page } = req.query;
   try {
      const count = await User.count();
      const pages = getPagesFromCountLimit(count, LIMIT);
      page = normalizePage(page, pages);

      const users = await User.findAll({
         limit: LIMIT,
         offset: (page - 1) * LIMIT,
         attributes: {
            exclude: ["id_role", "password", "createdAt", "updatedAt"],
         },

         include: [
            {
               model: Alumno,
               as: "alumno",
               attributes: {
                  exclude: ["id_user", "createdAt", "updatedAt"],
               },
            },
            {
               model: Role,
               as: "role",
               attributes: ["role"],
            },
         ],
      });
      sendSuccessResponse(res, 200, {
         info: {
            total_results: count,
            limit_results: users.length,
            page: page,
            total_pages: pages,
         },
         results: users,
      });
   } catch (error) {
      sendErrorResponse(res, 500, errorMsg.user.GETALL, error);
   }
};
