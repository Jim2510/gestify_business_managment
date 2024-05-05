require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect: connectDB } = require("./db");
const helmet = require("helmet");
const app = express();

//middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_, res) => {
  res.send("Server online");
});

app.use("/api", require("../server/api/routes/products"));

connectDB();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server on port: ${process.env.SERVER_PORT}`);
});
