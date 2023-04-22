const Note=require('../models/note')
const useController={
    showNote:async function(req,res,next){
        try{
            let noteData=await Note.all()
            res.json({
                code:200,
                message:"success",
                data:noteData
            })
        }catch(e){
            res.json({code:0,message:"default",data:e})
        }
    }
}
module.exports=useController