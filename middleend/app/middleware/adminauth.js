module.exports = options =>{
    return async function adminauth(ctx,next){
        if(ctx.session.userid){
            await next();
        }else{
            ctx.body={data:'You haven\'t logged in'};
        }
    }
}