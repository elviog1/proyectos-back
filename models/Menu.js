const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    user: {type:Object, required: true},
    product: [{type: Object, required: true }],
    priceTotal: {type:Number, required: true},
    dateMenu: {type:String,required:true}
})

const Menu = mongoose.model("menues",menuSchema)

module.exports = Menu