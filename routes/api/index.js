const router = require("express").Router();
const example = require("./example");

// example routes
router.use("/example", example);

module.exports = router;