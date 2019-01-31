const router = require("express").Router();
const controller = require("../../controllers/leadsController");

router.route("/")
    .post(controller.save);

router.route("/count/:workflowId")
    .get(controller.count);
    


module.exports = router;
