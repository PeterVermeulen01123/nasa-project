const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./routes/api_version");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("short")); // combined

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1/", api);

app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
