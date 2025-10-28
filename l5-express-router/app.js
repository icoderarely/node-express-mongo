const express = require("express");

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(hostRouter);

app.server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
