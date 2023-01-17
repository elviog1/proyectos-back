const express = require('express')
const router = express.Router()
const {create,getAll} = require('../controllers/MenuControllers')

router.post("/", create)
router.get("/", getAll)

module.exports = router