const express = require("express");
const router = express.Router();

// Internal Imports
const { getLogin, login, logout } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");

// set page title
const page_title = "login";

//Login Page
router.get("/", decorateHtmlResponse(page_title), getLogin);
router.post(
  "/",
  decorateHtmlResponse(page_title),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

// Logout User
router.delete("/", logout);

module.exports = router;
