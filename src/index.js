const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./Auth/Routes");
const blogRoutes = require("./blog/Routes");

const connectDb = require("./db/Connection");

const myApp = express();
const port = 8081;

myApp.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

myApp.use(bodyParser.json());
//route redirection
myApp.use("/auth", authRoutes);
myApp.use("/blogs", blogRoutes);

connectDb()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

myApp.listen(port, () => {
  console.log(`port is running in port ${port}`);
});
