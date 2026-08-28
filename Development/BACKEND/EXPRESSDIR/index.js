const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// app.get("/", (req, res) => {
//   res.send("Home page...");
// });

// app.get("/search", (req, res) => {
//   res.send("search page...");
// });

// app.get("/find", (req, res) => {
//   res.send("find page...");
// });

// app.get("/*rest", (req, res) => {
//   res.send("this page does not exists...");
// });

// app.post("/", (req, res) => {
//   res.send("post request home page...");
// });

// app.use((req, res) => {
//   console.log("new incomming request received....");
//   res.send("Basic response..");
// });

// app.get("/:username", (req, res) => {
//   let { username } = req.params;
//   console.log(req.params);
//   res.send(`This account belongs to @${username}`);
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("no Search found!");
  }
  res.send(`These are the results for : ${q}`);
  console.log(q)
});
