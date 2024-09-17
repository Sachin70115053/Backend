const mongoose=require("mongoose");
require('dotenv').config();


exports.connectdb = ()=>{   
    mongoose.connect(process.env.URL)
    .then(()=>{
        console.log("connected to MOngo db")
    })
    
    .catch((err)=>{
        console.error('error in connection to mongo DB')
        
    })
}
