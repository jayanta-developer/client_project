// const crypto = require('crypto');
const mongoose = require("mongoose");
const validator = require("validator");
// const bcrypt = require('bcryptjs');

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "A user must have a email"],
    validate: [validator.isEmail, "Please provide a valide email"],
    unique: true,
    lowercase: true,
  },
  phone: String,

  role: {
    type: String,
    default: "user",
    enum: {
      values: ["user", "guide", "admin", "lead-guide"],
      message: "A user role must be in betwen (user, guide, lead-guide, admin)",
    },
  },
});

module.exports = mongoose.model("Client", ClientSchema);
