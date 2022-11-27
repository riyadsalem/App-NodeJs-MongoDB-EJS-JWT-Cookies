const express = require("express");
const router = express.Router();

// Internal Imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

//Login Page
router.get("/users", decorateHtmlResponse("Users"), getUsers);

/// Add User
router.post("/", avatarUpload, addUserValidators, addUserValidationHandler);

module.exports = router;
