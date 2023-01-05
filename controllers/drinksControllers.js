const Drink = require('../models/Drink') 

const drinksControllers ={
    create: async (req,res) =>{
        const {name,description,price,image} = req.body
        try {
            let drink = await new Drink({name,description,price,image}).save()
            if(drink){
                res.status(201).json({
                    message: "drink created",
                    success: true
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
    getAll: async(req,res) =>{
        let query = req.body
        try {
            let drink = await Drink.find(query)
            if(drink){
                res.status(200).json({
                    message: "all drink found",
                    success: true,
                    response: drink
                })
            }else{
                res.status(404).json({
                    message: "not drink found",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false,
            })
        }
    },
    getOne: async(req,res) =>{
        let {id} = req.params
        try {
            let drink = await Drink.findOne({_id:id})
            if(drink){
                res.status(200).json({
                    message:"drink found",
                    success: true,
                    response: drink
                })
            }else{
                res.status(404).json({
                    message:"not drink found",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false,
            })
        }
    },
    deleteFood: async(req,res) =>{
        let {id} = req.params
        try {
            let drink = await Drink.findOneAndDelete({_id:id})
            if(drink){
                res.status(200).json({
                    message: "drink deleted successfully",
                    success:true,
                })
            }else{
                res.status(404).json({
                    message: "not drink found",
                    success:false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success:false,
            })
        }
    },
    updateFood: async(req,res) => {
        let {id} = req.params
        let updateFood = req.body
        try {
            let drink = await Drink.findOneAndUpdate({_id:id},updateFood,{new:true})
            if(drink){
                res.status(200).json({
                    message: "drink update successfully",
                    success:true,
                    response: drink
                })
            }else{
                res.status(404).json({
                    message: "not drink found",
                    success:false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success:false,
            })
        }
    }
}

module.exports = drinksControllers