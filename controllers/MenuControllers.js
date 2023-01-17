const Menu = require('../models/Menu')

const menuesControllers = ({
    create: async(req,res) =>{
        const {product,priceTotal,user} = req.body
        try {
            let menu = await new Menu({product,priceTotal,user}).save()
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
    }
})

module.exports = menuesControllers