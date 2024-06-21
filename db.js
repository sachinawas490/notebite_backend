const mongoose=require('mongoose');
const url=process.env.MONGO_URL;
mongoose.connect(url);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connected to db");
})
db.on('disconnected',()=>{
    console.log("disconnected to db");
})
db.on('error',()=>{
    console.log("error to db");
})