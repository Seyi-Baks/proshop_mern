import express from 'express'
const router = express.Router()
import {authUser, getUserProfile, registerUser} from '../controllers/user.controller.js'
import { protect } from '../middleware/auth.middleware.js'


router.route('/login').post(authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/').post(registerUser)



export default router
