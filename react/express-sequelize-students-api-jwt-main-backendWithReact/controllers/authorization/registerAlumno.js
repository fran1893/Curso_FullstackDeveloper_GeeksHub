const { Alumno, User } = require("../../models");
const {
   sendSuccessResponse,
   sendErrorResponse,
} = require("../../_util/sendResponse");
const { errorMsg, successMsg } = require("../../_util/messages");
const { hash } = require("../../_util/hash");

const global = require("../../config/global");
const { isPasswordValidLength } = require("../../_util/util");

/**
 * Crear nuevo alumno.
 * Ejemplo url: [POST] http://localhost:3000/auth/register/alumno
 * @param {*} req    Request object
 * @param {*} res    Response object
 */
module.exports = async (req, res) => {
   const {
      nombre,
      apellidos,
      email,
      password,
      fecha_nacimiento,
      activo,
      id_nacionalidad,
      id_direccion,
   } = req.body;

   if (!isPasswordValidLength(password)) {
      return sendErrorResponse(res, 400, errorMsg.user.PASSWORDLEN);
   }

   try {
      const newUser = {
         nombre,
         apellidos,
         email,
         password: hash(password),
         fecha_nacimiento,
         id_role: global.role.USER.id,
      };

      const user = await User.create(newUser);

      const newAlumno = {
         activo,
         id_nacionalidad,
         id_direccion,
         id_user: user.id,
      };

      await Alumno.create(newAlumno);

      sendSuccessResponse(res, 201, successMsg.user.CREATE);
   } catch (error) {
      sendErrorResponse(res, 500, errorMsg.user.CREATE, error);
   }
};
