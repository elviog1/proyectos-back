const mongoose= require ('mongoose')

const eventSchema = new mongoose.Schema({
    name:{type:String, required:true},
    fecha:{type:String, required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    place:{type:String, required:true},
    capacity:{type:Number, required:true},
    assistance:{type:Number},
    estimate:{type:Number},
    price:{type:Number, required:true},
    image:{type:String, required:true},
})

const Events = mongoose.model("events",eventSchema)

module.exports = Events