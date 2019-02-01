const router = require("express").Router();
const controller = require("../../controllers/passController");

router.route("/")
    .post(controller.passUpdate);

module.exports = router;