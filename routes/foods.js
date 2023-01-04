const express = require('express')
const router = express.Router()
const {create,getAll,getOne,deleteFood,updateFood} = require('../controllers/foodsControllers')

router.post("/", create)
router.get("/", getAll)
router.get("/:id", getOne)
router.delete("/:id", deleteFood)
router.put("/:id", updateFood)
module.exports = router