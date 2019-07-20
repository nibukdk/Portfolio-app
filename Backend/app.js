const express = require("express"),
  app = express(),
  mongo = require("mongodb"),
  mongoose = require("mongoose");

// Require mongo urls from another folder
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(success => console.log("Connected to Db", db.toUpperCase()))
  .catch(err => console.log(err));

//Prevent back button after logout
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});
app.post("/", (req, res) => {
  res.status(200).json({ msg: "Succesfull Connection" });
});
const Port = 8000;
app.listen(Port, err => {
  if (err) console.log(err);
  else console.log("App running at ", Port);
});
