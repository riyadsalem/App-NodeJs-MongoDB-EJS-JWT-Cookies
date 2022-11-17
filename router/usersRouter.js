const express = require("express");
const router = express.Router();

// Internal Imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");
const singleUploader = require("../middlewares/users/avatarUpload");

//Login Page
router.get("/users", decorateHtmlResponse("Users"), getUsers);

/// Add User
router.post("/", singleUploader);

module.exports = router;
