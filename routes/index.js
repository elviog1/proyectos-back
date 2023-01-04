var express = require('express');
var router = express.Router();
const eventsRouter = require("./events")
const foodsRouter = require('./foods')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    name: "Mis proyectos :D"
  })
});

router.use("/events",eventsRouter)
router.use("/foods",foodsRouter)

module.exports = router;
