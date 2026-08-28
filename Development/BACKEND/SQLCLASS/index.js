const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Sigma_app",
  password: "ArjunSoni@910",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home Route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let count = results[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch {
    res.send("some error in DB");
  }
});

// Show User Route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let userData = results;
      res.render("user.ejs", { userData });
    });
  } catch (err) {
    res.send("some error occured");
  }
});

// Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, results) => {
      if(err) throw err;
      let user = results[0];
      res.render("edit.ejs", {user});
    });
  } catch (err) {
    res.send("some error in DB");
  }
});

// UPDATE (DB) Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, results) => {
      if(err) throw err;
      let user = results[0];
      if(formPass != user.password) {
        res.send("WRONG PASSWORD");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, results) => {
          if(err) throw err;
          res.redirect("/user");
        })
      }
    });
  } catch (err) {
    res.send("some error in DB");
  }
});


app.listen("8080", () => {
  console.log(`server is running on port 8080`);
});
