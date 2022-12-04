const express = require("express");
const router = express.Router();

// Internal Imports
const { getLogin, login } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");

//Login Page
router.get("/", decorateHtmlResponse("Login"), getLogin);
router.post("/login", login);

module.exports = router;
