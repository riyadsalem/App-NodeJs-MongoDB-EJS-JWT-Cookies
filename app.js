// External Imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

// Internal Imports
const {
  notFountHandler,
  errorHandler,
} = require("./middlewares/commons/errorHandler");

const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();
dotenv.config({ path: "./secretDotEnv/.env" });

// Set View Engine
app.set("view engine", "ejs");

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse Cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// Error Handling
// 404 not found handler
app.use(notFountHandler);

// Common error handler
app.use(errorHandler);

// Database Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection Successful"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, () => {
  console.log(`App Listening to PORT ${process.env.PORT}`);
});
