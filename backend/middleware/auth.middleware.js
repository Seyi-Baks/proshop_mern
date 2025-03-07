import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async(req, res, next) => {
  let token = req.headers['x-access-token']|| req.headers.Authorization|| req.headers.token|| req.headers.authorization;

  if(token && token.startsWith('Bearer ')){
    try {
      token = token.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if(!token){
    res.status(401)
    throw new Error('Not authrorized, no token')
  }
})

export {
  protect
}