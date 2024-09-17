const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
    base_unit: { type: String, required: true },   
    quote_unit: { type: String, required: true },  
    low: { type: Number, required: true },         
    high: { type: Number, required: true },        
    last: { type: Number, required: true },        
    type: { type: String, required: true },        
    open: { type: Number, required: true },        
    volume: { type: Number, required: true },      
    sell: { type: Number, required: true },        
    buy: { type: Number, required: true },         
    at: { type: Number, required: true },          
    name: { type: String, required: true } 

    }
)

module.exports = mongoose.model("User",userSchema)


