const router = require("express").Router();
const controller = require("../../controllers/adminController");

router.route("/")
.post(controller.newUser)
.get(controller.findAll);

router.route("/:id").post(controller.erase);

module.exports = router;
