const router = require("express").Router();
const controller = require("../../controllers/workflowsController");

router.route("/api/workflows")
    .post(controller.save);


module.exports = router;
