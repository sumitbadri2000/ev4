const express = require("express");
const { connection } = require("./db");
const { auth } = require("./middleware/Authentication");
const { postR } = require("./routes/post.routes");
const { userR } = require("./routes/user.routes");
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});
app.use("/users", userR);
app.use(auth);
app.use("/posts", postR);
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("server");
  } catch (error) {
    console.log(error);
  }
  console.log(process.env.port);
});
