// External Imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

// Internal Imports
const User = require("../models/People");

// Get Login Page
function getLogin(req, res, next) {
  res.render("index");
}

// Do User Login
async function login(req, res, next) {
  try {
    const user = await User.findOne({
      $or: [{ email: req.body.username }, { mobile: req.body.username }],
    });

    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (isValidPassword) {
        // prepare the user object to generate token
        const userObject = {
          username: user.name,
          mobile: user.mobile,
          email: user.email,
          role: "user",
        };

        // Generate Token
        const token = jwt.sign(userObject, process.env.JWT_SECRET, {
          expireshIn: process.env.JWT_EXPIRY,
        });

        // SET Cookie
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRY,
          httpOnly: true,
          signed: true,
        });

        // SET Logged in user local IDENTIFIER
        res.local.loggedInUser = userObject;
        res.render("inbox");
      } else {
        throw createError("Login Failed please try again");
      }
    } else {
      throw createError("Login Failed please try again");
    }
  } catch (err) {
    res.render("index", {
      data: {
        username: req.body.username,
      },
      errors: {
        common: {
          msg: err.message,
        },
      },
    });
  }
}

module.exports = {
  getLogin,
  login,
};
