const router = require("express").Router();
const example = require("./example");
const login = require("./login");

// example routes
router.use("/example", example);
router.use("/login", login);

module.exports = router;