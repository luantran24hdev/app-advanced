const express = require("express");
const userRoutes = express.Router();

// Require Business model in our routes module

let User = require("../Models/Users.js");

//get list page users
userRoutes.route("/").get(function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

// Add User
userRoutes.route("/add").post(function (req, res) {
  let user = new User(req.body);
  console.log("user", user);
  user
    .save()
    .then((user) => {
      res.status(200).json({
        title: "user in added successfully !",
        message: "data added successfully",
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Unable to save to database !",
        error: this.err,
      });
    });
});
// sign in

userRoutes.route("/signin/:id").post(function (req, res) {
  // Kiểm tra email
  User.findById(req.params.id, function (err, users) {
    if (
      req.body.email === "luantran.24hdev@gmail.com" &&
      req.body.password === "123123"
    ) {
      res.status(200).json({
        statusCode: 200,
        message: "Success!",
        user: users,
      });
    } else {
      res.status(200).json({
        statusCode: 500,
        message: "Failed!",
        user: null,
      });
    }
  });
});
module.exports = userRoutes;
