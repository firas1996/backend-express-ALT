const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connection to the DB secured !!!");
  })
  .catch((e) => {
    console.log(`Error: ${e}`);
  });

const port = 1234;
const app = express();

app.listen(port, () => {
  console.log("The server is running !!!!");
});
