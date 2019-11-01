let verifyToken = require('../helpers/jwt').verifyToken

function authentication(req,res,next){
  try {
    let decodedToken = verifyToken(req.headers.token)
    req.loggedUser = decodedToken
    next()
  } catch (error) {
    next({status: 401, message: "You are not authenticated to perform this action"})
  }
}

module.exports = authentication