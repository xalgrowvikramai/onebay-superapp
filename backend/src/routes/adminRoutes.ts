import { Router } from 'express';
import { getAllAdmins, createAdmin, updateAdmin, deleteAdmin } from '../controllers/adminController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Admin routes
router.get('/users', authMiddleware, getAllAdmins);
router.post('/users', authMiddleware, createAdmin);
router.put('/users/:id', authMiddleware, updateAdmin);
router.delete('/users/:id', authMiddleware, deleteAdmin);

export default router;