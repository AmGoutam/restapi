const express = require("express");
const { home, testing } = require("../controllers/auth-controller");

const router = express.Router();

router.route("/").get(home);

router.route("/testing").get(testing);

module.exports = router;
