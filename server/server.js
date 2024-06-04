require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// Middleware
app.use(express.json());
// Routes
app.use("/api/posts", require("./src/routes/post"));
app.use("/api/users", require("./src/routes/user"));
// Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen("4000", () => {
      console.log(`Listening on port ${process.env.PORT} and connected to MongoDB`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  });