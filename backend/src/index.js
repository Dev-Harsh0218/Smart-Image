const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("../routes/api")(app);

app.listen(7000, (req, res) => {
  console.log("this is from new new new new new");
});
