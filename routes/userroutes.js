const userroutes=require('express').Router();
const {registration,login}=require('../controller/usercontroller.js')
userroutes.post('/registration',registration);
userroutes.post('/login',login);

module.exports= userroutes;