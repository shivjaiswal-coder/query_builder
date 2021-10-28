
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/rulesets',{
    
})

const RulesScehma=new mongoose.Schema({
    condition:{
        type:String,
        required:true
    },
    rule:{
        id:{
            type:String,
            required:true
        },
        field:{
            type:String,
            
        },
        input:{
            type:String
        },
        operator:{
            type:String,
        },
        value:{
            type:String
        }
    }

})
const Rule=mongoose.model('Rule',RulesScehma)
module.exports=Rule
