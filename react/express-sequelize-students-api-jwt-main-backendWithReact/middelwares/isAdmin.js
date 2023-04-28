const { errorMsg } = require("../_util/messages");
const { sendErrorResponse } = require("../_util/sendResponse");

const isAdmin = (req, res, next) => {
   const { userRole } = req;

   if (userRole != "admin") {
      return sendErrorResponse(res, 403, errorMsg.authorization.NOAUTH);
   } else next();
};

module.exports = isAdmin;
