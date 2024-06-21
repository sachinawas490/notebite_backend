const mongoose=require('mongoose');
const noteschema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Notes=mongoose.model('Notes',noteschema);
module.exports=Notes;