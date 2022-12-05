const express = require("express");
const router = express.Router();

// Internal Imports
const { getInbox } = require("../controller/inboxController");
const { checkLogin } = require("../middlewares/commons/checkLogin");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");

// Inbox Page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
