require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require("./router/auth-router");
const connectionDb = require("./utils/conn");
app.use(express.json())
app.use("/auth/api", router);

connectionDb().then(() => {
  app.listen(PORT, () => {
    console.log(`App Is Running at Port ${PORT}...!!!`);
  });
});
