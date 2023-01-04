const mongoose = require('mongoose')

const drinkSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    price: {type:Number, required: true},
})

const Drink = mongoose.model("drinks",drinkSchema)

module.exports = Drink