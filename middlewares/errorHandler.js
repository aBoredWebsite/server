function errorHandler(err,req,res,next){
  const status = err.status || 500
  const message = err.message || 'internal sever error'

  if(err.name === 'ValidationError'){
    let errArr = []
    for (let key in err.errors){
      errArr.push(err.errors[key].message)
    }
    res.status(400).json({message : 'validation error',errArr})
  } else {
    res.status(status).json({message})
  }

  



}

module.exports = errorHandler