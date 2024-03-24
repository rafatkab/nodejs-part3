const express = require("express");
require("dotenv").config();

const app = express();

app.get("/login", (req, res) => {
  const username = process.env.USER;
  const password = process.env.PASSWORD;
  res.json({ username, password });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
