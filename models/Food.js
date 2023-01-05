const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    image: {type:String, required: true},
    price: {type:Number, required: true},
})

const Food = mongoose.model("foods",foodSchema)

module.exports = Food