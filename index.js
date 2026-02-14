const express = require("express");
// const connect = require("mongoose").connect();
const { connect } = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
dotenv.config({ path: "./.env" });

connect(process.env.DATABASE)
  .then(() => {
    console.log("Connection to the DB secured !!!");
  })
  .catch((e) => {
    console.log(`Error: ${e}`);
  });

const port = 1234;
const app = express();
app.use(express.json());
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log("The server is running !!!!");
});
