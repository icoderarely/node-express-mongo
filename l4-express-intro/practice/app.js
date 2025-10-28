const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url, "In the dummy middleware 1!");
  next();
});

app.use((req, res, next) => {
  console.log(req.method, req.url, "In the dummy middleware 2!");
  next();
});

// app.use((req, res, next) => {
//   console.log(req.method, req.url, "Response middleware called!");
//   res.send("<h1>This is the response!</h1>");
// });

app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to the Home Page!</h1>");
});

app.use("/contact", (req, res, next) => {
  res.send(
    "<form method='POST' action='/contact'><input type='text' name='username'><button type='submit'>Submit</button></form>",
  );
});

app.post("/contact", (req, res, next) => {
  res.send("<h1>Form submitted via POST!</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
