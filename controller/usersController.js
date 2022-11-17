const People = require("../models/People");

const getUsers = (req, res, next) => {
  res.render("users");
};

module.exports = { getUsers };
