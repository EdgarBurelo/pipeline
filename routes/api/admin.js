const router = require("express").Router();
const controller = require("../../controllers/exaplecontroller");

router.route("/").post(controller.newUser); 

module.exports = router;
