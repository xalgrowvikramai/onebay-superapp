import { Request, Response } from 'express';
import Admin from '../models/adminModel';

// Get all admins
export const getAllAdmins = async (req: Request, res: Response) => {
    try {
        const admins = await Admin.findAll();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving admins', error });
    }
};

// Create a new admin
export const createAdmin = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    try {
        const newAdmin = await Admin.create({ name, email });
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(500).json({ message: 'Error creating admin', error });
    }
};

// Update an admin
export const updateAdmin = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const updatedAdmin = await Admin.update({ name, email }, { where: { id } });
        res.status(200).json(updatedAdmin);
    } catch (error) {
        res.status(500).json({ message: 'Error updating admin', error });
    }
};

// Delete an admin
export const deleteAdmin = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Admin.destroy({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting admin', error });
    }
};