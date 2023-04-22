
const configs = {
    mysql: {
        host: '114.132.50.228',
        user: 'root',
        password: '129218219',
        port: '3306',
        database: 'website'
    },
    log:{
        error(message){
            console.log('[knex error]',message)
        }
    }
};
module.exports=configs
