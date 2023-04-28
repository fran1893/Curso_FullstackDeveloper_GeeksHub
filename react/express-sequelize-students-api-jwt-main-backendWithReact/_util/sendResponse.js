const sendSuccessResponse = (res, code, data) => res.status(code).json(data);
const dataWithPaginationInfo = (data, totalResults, page, totalPages) => ({
   info: {
      total_results: totalResults,
      limit_results: data.length,
      page: page,
      total_pages: totalPages,
   },
   results: data,
});

const sendErrorResponse = (res, code, message, error = null) => {
   res.status(code).json({
      status: "error",
      message,
      error: error?.toString(),
   });
};

module.exports = {
   sendSuccessResponse,
   sendErrorResponse,
};
