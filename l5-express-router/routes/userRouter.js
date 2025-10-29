const express = require("express");
const path = require("path");

const userRouter = express.Router();
const pathDir = require("../utils/pathUtil");

userRouter.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../views/home.html"));
  res.sendFile(path.join(pathDir, "views", "home.html"));
});

module.exports = userRouter;
