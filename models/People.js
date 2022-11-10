const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema(
  {
    name: { type: String, required: true, tirm: true },
    email: { type: String, required: true, tirm: true, lowercase: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  {
    timestamps: true,
  }
);
const People = mongoose.model("People", peopleSchema);
module.exports = People;
