const createError = require("http-errors");

// 404 not found handler
function notFountHandler(req, res, next) {
  next(createError(404, "Your Requested content ws not found"));
}

// default error handler
function errorHandler(err, req, res, next) {
  res.render("error", {
    title: "Error Page",
  });
}

module.exports = {
  notFountHandler,
  errorHandler,
};
