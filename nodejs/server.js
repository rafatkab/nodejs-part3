const express = require("express");
require("dotenv").config();

const app = express();

app.get("/login", (req, res) => {
  const username = process.env.USER;
  const password = process.env.PASSWORD;
  res.json({ username, password });
});

app.get("/users", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    res.json(
      data.map((user) => {
        return { name: user.name, email: user.email, username: user.username };
      })
    );
  } catch (error) {
    console.log("Error in fetch request: ", error);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
