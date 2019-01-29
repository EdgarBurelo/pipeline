const router = require("express").Router();
const controller = require("../../controllers/todoController");

router.route("/:id")
.get(controller.findAll);

module.exports = router;