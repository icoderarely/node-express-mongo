const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/host/form'>Go to Host Form Page</a>");
});

module.exports = userRouter;
