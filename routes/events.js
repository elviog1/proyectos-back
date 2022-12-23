var express = require('express');
var router = express.Router();
const {create,all,oneEvent} = require('../controllers/eventsControllers')

router.post("/",create);
router.get("/",all);
router.get("/:id",oneEvent);

module.exports = router