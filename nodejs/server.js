const express = require("express");

const app = express();

app.get("/login", (req, res) => {
  res.send(user);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
