const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("ABHISHEK-X-X-X----");
});

app.get("/login", (req, res) => {
  res.send("<h1>LOGIN TO USER</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>HEY GUYS</h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
