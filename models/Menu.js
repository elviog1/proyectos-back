const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    food: [{type: Object, required: true }],
    drink: [{type: Object, required: true }],
    price: {type:Number, required: true},
    user: {type:Object, required: true}
})

const Menu = mongoose.model("menues",menuSchema)

module.exports = Menu