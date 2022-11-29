const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const todoRouter = require("./routes/api/todo");
const usersRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/todo", todoRouter);
app.use("/api/users", usersRouter);

app.use("/link", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/link.html"));
});

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;
