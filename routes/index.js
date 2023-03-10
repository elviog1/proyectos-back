var express = require('express');
var router = express.Router();
const eventsRouter = require("./events")
const foodsRouter = require('./foods')
const drinksRouter = require('./drinks')
const menuesRouter = require('./menues')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    name: "Mis proyectos :D"
  })
});

router.use("/events",eventsRouter)
router.use("/foods",foodsRouter)
router.use("/drinks",drinksRouter)
router.use("/menues",menuesRouter)

module.exports = router;
