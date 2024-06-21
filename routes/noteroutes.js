const verifytoken=require('../jwt/verifyToken.js');
const noteroutes=require('express').Router();
const {addnotes,getnotes,updatenotes,deletenote}=require('../controller/notecontroller.js')
noteroutes.post('/addnote',verifytoken,addnotes);
noteroutes.get('/notes',verifytoken,getnotes);
noteroutes.put('/notes',verifytoken,updatenotes)
noteroutes.delete('/notes/:id',verifytoken,deletenote);
module.exports=noteroutes; 