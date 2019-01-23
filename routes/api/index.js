const router = require("express").Router();
const example = require("./example");
const login = require("./login");
const signup = require("./signup");
const workflow = require("./workflowAPI");
const leads = require("./leadsAPI");

// example routes
router.use("/example", example);
router.use("/login", login);
router.use("/signup",signup);
router.use("/workflow", workflow);
router.use("/workflows", workflow);
router.use("/leads", leads);

module.exports = router;