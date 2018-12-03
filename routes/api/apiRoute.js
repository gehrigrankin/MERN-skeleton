const router = require("express").Router();
const apiController = require("../../controllers/apiController");

// Matches with "/api/apiRoute"
router.route("/")
  .get(apiController.findAll)
  .post(apiController.create);


module.exports = router;
