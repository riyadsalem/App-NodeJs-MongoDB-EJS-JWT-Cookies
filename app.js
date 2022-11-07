const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config();

// Database Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection Successful"))
  .catch((error) => console.log(error));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set View Engine
app.set("view engine", "ejs");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse Cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing Setup

// Error Handling

app.listen(process.env.PORT, () => {
  console.log(`App Listening to PORT ${process.env.PORT}`);
});
