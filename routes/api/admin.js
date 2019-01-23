const router = require("express").Router();
const controller = require("../../controllers/adminController");

router.route("/")
.post(controller.newUser)
.get(controller.findAll)
.put(controller.editUser)


module.exports = router;
