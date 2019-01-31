const router = require("express").Router();
const controller = require("../../controllers/todoController");

router.route("/:id")
.get(controller.findAll);

router.route("/edit")
.put(controller.editOne);

module.exports = router;