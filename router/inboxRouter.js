const express = require("express");
const router = express.Router();

// Internal Imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");

// Inbox Page
router.get("/inbox", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
