const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) => {
//   console.log("It is a middleware");
//   next();
// });

// Logger
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
  res.send("Data");
});

app.get("/", (req, res) => {
  res.send("This is root page");
});

app.use("/random", (req, res) => {
  console.log("It is a middleware");
  res.send("This is a random page");
});

// app.use((req, res) => {
//   res.send("Page not found!");
// });

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err, req, res, next) => {
  let { status = 500, message = "SOME ERROR OCCURRED" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server is running on 8080");
});
