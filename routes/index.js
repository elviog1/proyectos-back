var express = require('express');
var router = express.Router();
const eventsRouter = require("./events")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    name: "Mis proyectos :D"
  })
});

router.use("/events",eventsRouter)

module.exports = router;
