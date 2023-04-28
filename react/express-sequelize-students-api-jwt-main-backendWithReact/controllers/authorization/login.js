const { Role, User } = require("../../models");
const {
   sendSuccessResponse,
   sendErrorResponse,
} = require("../../_util/sendResponse");
const { errorMsg, successMsg } = require("../../_util/messages");
const { compareHash } = require("../../_util/hash");

const global = require("../../config/global");
const { generateToken } = require("../../_util/token");

/**
 * Login user.
 * Ejemplo url: [POST] http://localhost:3000/auth/login
 * @param {*} req    Request object
 * @param {*} res    Response object
 */
module.exports = async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return sendErrorResponse(res, 400, errorMsg.authorization.REQUIERED);
   }

   try {
      const user = await User.findOne({
         where: {
            email: email,
         },
         include: [
            {
               model: Role,
               as: "role",
               //attributes: ["nombre", "apellidos"],
            },
         ],
      });

      if (!user) {
         return sendErrorResponse(
            res,
            400,
            errorMsg.authorization.BADCREDENTIALS
         );
      }

      const isMatch = compareHash(password, user.password);

      if (!isMatch) {
         return sendErrorResponse(
            res,
            400,
            errorMsg.authorization.BADCREDENTIALS
         );
      }

      const token = generateToken({
         userId: user.id,
         userRole: user.role.role,
      });

      sendSuccessResponse(res, 200, {
         token,
         role: user.role.role,
      });
   } catch (error) {
      sendErrorResponse(res, 500, errorMsg.authorization.LOGINFAILED, error);
   }
};
