// External Imports
const bcrypt = require("bcrypt");
const path = require("path");

// Internal Imposrts
const User = require("../models/People");

// Get User From DataBase
const getUsers = async (req, res, next) => {};

// Add User in to DataBase
async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (req.files & (req.files.length > 0)) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }

  // Save User or send error
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User was added successfuly",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          meg: "Unknow Error Occured",
        },
      },
    });
  }
}

module.exports = { getUsers, addUser };
