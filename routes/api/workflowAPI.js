const router = require("express").Router();
const controller = require("../../controllers/workflowsController");

router.route("/")
    .post(controller.save)

router.route("/company/:companyId")
  .get(controller.findAll);

router.route("/:id")
  .get(controller.findOne);

module.exports = router;
