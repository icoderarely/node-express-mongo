const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/host/form", (req, res) => {
  res.send(`<form action="/host/submit" method="POST">
  <label for="hostname">Hostname:</label>
  <input type="text" id="hostname" name="hostname" required>
  <button type="submit">Submit</button>
</form>`);
});

hostRouter.post("/host/submit", (req, res) => {
  console.log(req.body);
  res.send(
    `<h1>Form Submitted</h1><p>Hostname: ${req.body.hostname}</p><a href="/host/form">Back to Form</a>`,
  );
});

module.exports = hostRouter;
