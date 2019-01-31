const router = require("express").Router();
const example = require("./example");
const login = require("./login");
const signup = require("./signup");
const admin = require("./admin");
const workflow = require("./workflowAPI");
const leads = require("./leadsAPI");
const userStatus = require("./userRev");
const todo = require("./todo");

// example routes
router.use("/example", example);
router.use("/login", login);
router.use("/signup",signup);
router.use("/admin", admin);
router.use("/workflow", workflow);
router.use("/workflows", workflow);
router.use("/leads", leads);
router.use("/userStatus",userStatus);
router.use("/todo", todo);

module.exports = router;