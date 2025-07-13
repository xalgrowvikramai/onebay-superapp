import { Router } from 'express';
import { register, login, logout } from '../controllers/authController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Route for user registration
router.post('/register', register);

// Route for user login
router.post('/login', login);

// Route for user logout
router.post('/logout', authMiddleware, logout);

export default router;