const express = require("express");
const path = require("path");

const userRouter = require("./routes/userRouter");
const { router: hostRouter } = require("./routes/hostRouter");
const pathDir = require("./utils/pathUtil");

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res) => {
  res.status(404).render("404");
});

app.server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
