const Event = require('../models/Event')

const eventsControllers = {
    create: async(req,res)=>{
        const {name,fecha,description,category,place,capacity,assistance,
            estimate,price,image} = req.body
        try {
            let event = await new Event({name,fecha,description,category,place,capacity,assistance,
                estimate,price,image}).save()
                if(event){
                    res.status(201).json({
                        message: "event created",
                        success: true
                    })
                }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },
    all: async(req,res)=>{
        let query = req.body
        try {
            let event = await Event.find(query)
            if(event){
                res.status(200).json({
                    message: "all events found",
                    response:event,
                    success:true
                })
            }else{
                res.status(400).json({
                    message: "not events found",
                    success:false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(404).json({
                message: error.message,
                success:false
            })
        }
    },
    oneEvent: async (req,res)=>{
        let {id} =req.params
        try {
            let event = await Event.findOne({_id:id})
            if(event){
                res.status(200).json({
                    message: "you get one event",
                    response: event,
                    success: true
                  }) 
            }else{
                res.status(400).json({
                    message: "not found",
                    success: false
                  }) 
            }
        } catch (error) {
            console.log(error)
            res.status(404).json({
                message: error.message,
                success: false
              }) 
        }
    }
}

module.exports = eventsControllers