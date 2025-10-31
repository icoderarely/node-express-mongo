const express = require("express");
// const path = require("path");

const { hostData } = require("./hostRouter");

const userRouter = express.Router();
// const pathDir = require("../utils/pathUtil");

userRouter.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../views/home.html"));
  // res.sendFile(path.join(pathDir, "views", "home.html"));

  // to render using ejs
  res.render("home", { hosts: hostData });
});

module.exports = userRouter;
