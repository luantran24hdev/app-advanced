const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Users = new Schema(
  {
    fullname: {
      type: String,
    },
    gender: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("users", Users);
