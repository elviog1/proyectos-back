const Menu = require('../models/Menu')

const menuesControllers = {
    create: async(req,res) =>{
        const {product,priceTotal,user,dateMenu} = req.body
        console.log(req.body)
        try {
            let menu = await new Menu({product,priceTotal,user,dateMenu}).save()
            if(menu){
                res.status(201).json({
                    message: "menu created",
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
    getAll: async(req,res) =>{
        let query = req.body
        try {
            let menu = await Menu.find(query)
            if(menu){
                res.status(200).json({
                    message: "all menues found",
                    response:menu,
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
    deleteMenu: async(req,res) =>{
        let {id} = req.params
        try {
            let menu = await Menu.findOneAndDelete({_id:id})
            if(menu){
                res.status(200).json({
                    message: "menu deleted successfully",
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "not menu found",
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

module.exports = menuesControllers