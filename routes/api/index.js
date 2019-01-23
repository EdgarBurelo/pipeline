const router = require("express").Router();
const example = require("./example");
const login = require("./login");
const signup = require("./signup");
const workflow = require("./workflowAPI");

// example routes
router.use("/example", example);
router.use("/login", login);
router.use("/signup",signup);
router.use("/workflow", workflow);

module.exports = router;