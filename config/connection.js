const mongoose=require("mongoose");
require('dotenv').config();


exports.connectdb =async ()=>{   
  await  mongoose.connect("mongodb+srv://Abhiman:Abhishek03@cluster02.5spc1jm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster02/assignment")
    .then(()=>{
        console.log("connected to MOngo db")
    })
    
    .catch((err)=>{
        console.error('error in connection to mongo DB')
        
    })
}
