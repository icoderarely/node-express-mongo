// core module - http not required anymore
// const http = require("http");

// external modules
const express = require("express");

// creating server is also not required
// const server = http.createServer(requestHandler);

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
