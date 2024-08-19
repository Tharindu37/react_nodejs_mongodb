const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { dbURI } = require("./config");
const userRoute = require("./routes/users");

const PORT = 3002;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Done");
});

app.use("/api/v1/user", userRoute);

// Connect to Mongodb
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });

// Start server
app.listen(PORT, () => {
  console.log(`Listen Port ${PORT}`);
});
