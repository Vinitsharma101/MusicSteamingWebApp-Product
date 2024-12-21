import express from 'express';
import { body } from 'express-validator'; 
import authMiddleware from '../middlewares/auth.middleware.js'; 
import userController from '../controller/userControll.js';   


const router = express.Router();
router.post('/register',
    [
        body('username').notEmpty().withMessage('Username is required'),
        body('email').isEmail().withMessage('Please enter a valid email'),
        body('password').isLength({ min: 4 }).withMessage('Password must be at least 8 characters long')
    ],
    userController.registerUser
)
router.post('/login',
    [
        body('email').isEmail().withMessage('Please enter a valid email'),
        body('password').isLength({ min: 4 }).withMessage('Password must be at least 8 characters long')
    ],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.getUserProfile)

export default router;
