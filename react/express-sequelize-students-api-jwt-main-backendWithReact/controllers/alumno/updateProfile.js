const { Alumno, Nacionalidad, Direccion, User } = require("../../models");
const {
   sendSuccessResponse,
   sendErrorResponse,
} = require("../../_util/sendResponse");
const { successMsg, errorMsg } = require("../../_util/messages");
const { hash } = require("../../_util/hash");
const global = require("../../config/global");

/**
 * Actualizar datos de alumno
 * Ejemplo url: [PUT] http://localhost:3000/api/alumnos/profile
 * @param {*} req    Request object
 * @param {*} res    Response object
 */
module.exports = async (req, res) => {
   const { userId } = req; // get user id from token

   let newUser;
   if (req.body.password) {
      newUser = {
         ...req.body,
         password: hash(req.body.password),
         id_role: global.role.USER.id, // to avoid update id_role with wrong role
      };
   } else {
      newUser = {
         ...req.body,
         id_role: global.role.USER.id, // to avoid update id_role
      };
   }

   try {
      let updatedResult = await User.update(newUser, {
         where: { id: userId },
      });

      if (updatedResult == 0) {
         return sendErrorResponse(res, 404, errorMsg.user.NOTFOUND);
      }

      const newAlumno = {
         ...req.body,
         id_user: userId, // to avoid update id_user
      };

      updatedResult = await Alumno.update(newAlumno, {
         where: { id_user: userId },
      });

      sendSuccessResponse(res, 202, successMsg.user.UPDATE);
   } catch (error) {
      sendErrorResponse(res, 500, errorMsg.user.UPDATE, error);
   }
};
