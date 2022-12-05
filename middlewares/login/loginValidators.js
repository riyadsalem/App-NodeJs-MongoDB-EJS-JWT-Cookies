const { check, validationResult } = require("express-validator");

const doLoginValidators = [
  check("username")
    .isLength({ main: 1 })
    .withMessage("Mobile Number or Email is REQUIRED"),
  check("password").isLength({ main: 1 }).withMessage("Password is REQUIRED"),
];

const doLoginValidationHandler = function (req, res, next) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();

  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.render("index", {
      data: {
        username: req.body.username,
      },
      errors: mappedErrors,
    });
  }
};

module.exports = { doLoginValidators, doLoginValidationHandler };
