const router = require("express").Router();
const example = require("./example");
const login = require("./login");
const signup = require("./signup");
const admin = require("./admin");

// example routes
router.use("/example", example);
router.use("/login", login);
router.use("/signup",signup);
router.use("/admin", admin);

module.exports = router;