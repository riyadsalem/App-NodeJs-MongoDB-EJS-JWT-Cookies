const express = require("express");
const router = express.Router();

// Internal Imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");

//Login Page
router.get("/users", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
