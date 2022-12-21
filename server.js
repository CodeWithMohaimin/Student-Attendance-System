const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  const obj = {
    name: "mohaimin",
    email: "mohaimin@gmail.com",
  };
  res.json(obj);
});

app.listen(4000, () => {
  console.log("server is running 4000 port");
});
