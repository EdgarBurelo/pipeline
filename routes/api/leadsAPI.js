const router = require("express").Router();
const controller = require("../../controllers/leadsController");

router.route("/")
    .post(controller.save);


module.exports = router;
