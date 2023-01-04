const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    food: {type: mongoose.Types.ObjectId, ref: 'foods', required: true },
    drink: {type: mongoose.Types.ObjectId, ref: 'drinks', required: true },
    price: {type:Number, required: true},
})

const Menu = mongoose.model("menues",menuSchema)

module.exports = Menu