const express = require('express')
const router = express.Router()
const {create,getAll,deleteMenu} = require('../controllers/MenuControllers')

router.post("/", create)
router.get("/", getAll)
router.delete("/:id", deleteMenu)

module.exports = router