const { errorMsg } = require("../_util/messages");
const { sendErrorResponse } = require("../_util/sendResponse");

module.exports = (role) => {
   return (req, res, next) => {
      const { userRole } = req;

      if (userRole != role) {
         return sendErrorResponse(res, 403, errorMsg.authorization.NOAUTH);
      } else next();
   };
};
