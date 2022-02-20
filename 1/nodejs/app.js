const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
// const bodyParser = require("body-parser");

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log(req.body);
});

// app.get("/", (req, res) => {
//   res.json({ msg: "your request was here" });
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ang", "index.html"));
});

module.exports = app;

//d:\server\index.html
///server/index.html
