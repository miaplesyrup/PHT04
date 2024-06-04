require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// Middleware
app.use(express.json());
// Routes
// app.use("/api/posts", require());
// Database
mongoose
  .connect(
    "mongodb+srv://delmai0721:wzEhMyhimNxNTnae@cluster0.uqsmult.mongodb.net/"
  )
  .then(() => {
    app.listen("4000", () => {
      console.log(`Listening on port 4000 and connected to MongoDB`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  });