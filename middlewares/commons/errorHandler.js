const createError = require("http-errors");

// 404 not found handler
function notFountHandler(req, res, next) {
  next(createError(404, "Your Requested content ws not found"));
}

// default error handler
function errorHandler(err, req, res, next) {
  // res.locals.title = "This is Error Page";

  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);

  if (!res.locals.html) {
    // html response
    res.render("error", {
      title: "This is html error page",
    });
  } else {
    // josn response
    res.json(res.locals.error);
  }
}

module.exports = {
  notFountHandler,
  errorHandler,
};
