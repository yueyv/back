const first_card=require('../models/first_card')
const useController={
    show_first_card:async function(req,res,next){
        try{
            let first_card_data=await first_card.all()
            res.json({
                code:200,
                message:"success",
                data:first_card_data
            })
        }catch(e){
            res.json({code:0,message:"default",data:e})
        }
    }
}
module.exports=useController