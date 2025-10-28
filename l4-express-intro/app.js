// core module - http not required anymore
// const http = require("http");

// external modules
const express = require("express");

// creating server is also not required
// const server = http.createServer(requestHandler);

const app = express();

app.use("/submit", (req, res, next) => {
  console.log("In the middleware 2!");
  res.send("<h1>Submitted!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In the middleware 1!");
  res.send("<h1>Hello from Express!</h1>");
  // next(); // pass to the next middleware
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
