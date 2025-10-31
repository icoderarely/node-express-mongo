const express = require("express");
const path = require("path");

const hostRouter = express.Router();
const pathDir = require("../utils/pathUtil");

hostRouter.get("/form", (req, res) => {
  // res.sendFile(__dirname + "/../views/hostForm.html");
  res.sendFile(path.join(pathDir, "views", "hostForm.html"));
});

const hostData = [];

hostRouter.post("/submit", (req, res) => {
  console.log(req.body);
  // res.sendFile(__dirname + "/../views/hostSuccess.html");
  hostData.push(req.body);
  // res.sendFile(path.join(pathDir, "views", "hostSuccess.html"));

  res.render("hostSuccess", { host: req.body });
});

module.exports = {
  router: hostRouter,
  hostData: hostData,
};
