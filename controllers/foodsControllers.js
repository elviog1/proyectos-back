const Food = require('../models/Food') 

const foodsControllers ={
    create: async (req,res) =>{
        const {name,description,price} = req.body
        try {
            let food = await new Food({name,description,price}).save()
            if(food){
                res.status(201).json({
                    message: "food created",
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
            let food = await Food.find(query)
            if(food){
                res.status(200).json({
                    message: "all food found",
                    success: true,
                    response: food
                })
            }else{
                res.status(404).json({
                    message: "not foods found",
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
            let food = await Food.findOne({_id:id})
            if(food){
                res.status(200).json({
                    message:"food found",
                    success: true,
                    response: food
                })
            }else{
                res.status(404).json({
                    message:"not food found",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message:"not food found",
                success: false,
            })
        }
    },
    deleteFood: async(req,res) =>{
        let {id} = req.params
        try {
            let food = await Food.findOneAndDelete({_id:id})
            if(food){
                res.status(200).json({
                    message: "food deleted successfully",
                    success:true,
                })
            }else{
                res.status(404).json({
                    message: "not food found",
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
            let food = await Food.findOneAndUpdate({_id:id},updateFood,{new:true})
            if(food){
                res.status(200).json({
                    message: "food update successfully",
                    success:true,
                    response: food
                })
            }else{
                res.status(404).json({
                    message: "not food found",
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

module.exports = foodsControllers