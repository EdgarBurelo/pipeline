const router = require("express").Router();
const controller = require("../../controllers/todoController");

router.route("/")
.get(controller.findAll);

module.exports = router;