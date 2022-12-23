const mongoose =require("mongoose")
mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.MONGO_IP,
    {
        useUnifiedTopology:true,
        useNewUrlParser: true
    }

).then(()=>console.log("Mongoose funcionando"))
.catch(error => console.log(error))