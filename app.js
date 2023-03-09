const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const manageRoutes = require("./routes/manage");
const { CORS } = require("./helpers/CORS");

const app = express();

app.use(bodyParser.json());
app.use(CORS);

app.use("/manage", manageRoutes);

const init = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/password-manager", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
    app.listen(8080);
    console.log("Server running at port 8080...");
  } catch (error) {
    console.log(error);
  }
};

init();
