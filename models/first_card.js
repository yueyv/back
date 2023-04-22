const Base=require('./base')
class Note extends Base{
    constructor(props='first_card'){
        super(props);
    }
}
module.exports=new Note()