const mongoose = require("mongoose");
const uri = `mongodb+srv://darkfaze:${process.env.mongoPass}@m001.doz3t.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri,(err)=>{
    if(err)console.log(err)
    else console.log("Connected to MongoDb")
})