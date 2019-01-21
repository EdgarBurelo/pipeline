const router = require("express").Router();
const example = require("./example");
const login = require("./login");
const signup = require("./signup");

// example routes
router.use("/example", example);
router.use("/login", login);
router.use("/signup",signup);

module.exports = router;