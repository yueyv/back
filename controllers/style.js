const Style=require('../models/style')
const useController={
    showStyle:async function(req,res,next){
        try{
            let styleData=await Style.all()
            res.json({
                code:200,
                message:"success",
                data:styleData
            })
        }catch(e){
            res.json({code:0,message:"default",data:e})
        }
    }
}
module.exports=useController