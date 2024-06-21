const Notes=require('../model/notemodel.js');
const addnotes=async(req,res)=>{
    console.log(req.user ,"  1212  ", req.body)
const {email,id}=req.user;
const {title,note}=req.body;
// if(!title||!content){
//    return res.status(401).json({"message":"all data in both field"})
// }
try {
    const response=await new Notes({
        userid:id,
        title,
        content:note
    })
    console.log(">>>",response)
    const data=await response.save();
    console.log(data);
    res.status(201).json({data});
} catch (error) {
    res.status(401).json({"message":error})
}
 
}
const getnotes=async(req,res)=>{
   const {id,email}=req.user;
   console.log("req.user  ",req.user);
   if(!id){
    return res.status(401).json({"message":"token is not correct login again"});
   }
   try {
      const response=await Notes.find({userid:id});
      if(response){
        res.status(201).json({response});
      }else{
        res.status(401).json({"message":"error during fetching the notes"});
      }
   } catch (error) {
    res.status(401).json({"message":"technical error"});
   }
}
const updatenotes=async(req,res)=>{
  console.log(req.body);
  const {title,newcontent,noteid}=req.body;
  console.log(title,newcontent,noteid)
  if(!noteid){
    return res.status(401).json({"message":"note id is not  present try again "});
  }
  const findnote=await Notes.findOne({_id:noteid})
  console.log(findnote);
  if(!findnote){
    return res.status(401).json({"message":"note not found !! try again "});
  }

  try {
      const response=await Notes.updateOne({_id:noteid},{$set:{title,content:newcontent}})
      console.log(response);
      res.status(201).json(response);
  } catch (error) {
     res.status(401).json({"message":error});
  }
}
const deletenote=async (req,res)=>{
  const {id}=req.params;
  console.log("id ",id)
  if(!id){
   return res.status(401).json({
      "message":"id is present"
    })
  }
 try {
  
    const response=await Notes.deleteOne({_id:id});
    console.log("-->",response);
    if (!response) {
      return res.status(401).json({ message: "Note not found" });
  }
  console.log("done")
  res.status(200).json({ message: "Note deleted successfully" });
  
 } catch (error) {
    res.status(401).json({"message":"error found the the delete node"})
 }

}
module.exports={addnotes,getnotes,updatenotes,deletenote}