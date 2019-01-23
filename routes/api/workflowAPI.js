const router = require("express").Router();
const controller = require("../../controllers/workflowsController");

router.route("/")
    .post(controller.save);


module.exports = router;
