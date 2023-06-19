//call back
const asyncWrapper = (fn) => {
    //keep passing these parameter to function
    return async (req,res,next) =>{
        try{
            await fn(req,res,next)
        }catch(err){
            next(err) // passing to next middleware
        }
    }
}

module.exports =asyncWrapper