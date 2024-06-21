const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        Unique:true
    },
    password:{
        type:String,
        required:true
    },
    imagepath:{
        type:String,
        default:'https://search.app.goo.gl/4VcukD5'
    },
   
    
}, {
    timestamps:true
})

const User=mongoose.model('User',userschema);
module.exports=User;