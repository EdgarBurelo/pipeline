const router = require("express").Router();
const controller = require("../../controllers/adminController");

router.route("/")
.post(controller.newUser)
.get(controller.findAll);

router.route("/:id").post(controller.erase);

router.route("/agents/:companyId")
.get(controller.findAgents);

module.exports = router;
