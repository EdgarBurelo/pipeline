const router = require("express").Router();
const controller = require("../../controllers/workflowsController");

router.route("/")
    .post(controller.save)
    .get(controller.findAll);


module.exports = router;
