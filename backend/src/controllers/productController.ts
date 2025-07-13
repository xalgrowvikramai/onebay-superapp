import { Request, Response } from 'express';
import {
    Product,
    getProducts,
    getProductById as getProductByIdModel,
    createProduct as createProductModel,
    updateProduct as updateProductModel,
    deleteProduct as deleteProductModel,
} from '../models/productModel';

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products', error });
    }
};

// Get a single product by ID
export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await getProductByIdModel(Number(id));
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving product', error });
    }
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
    const newProduct = req.body;
    try {
        const product = await createProductModel(newProduct);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};

// Update a product by ID
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedProduct = await updateProductModel(Number(id), updatedData);
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};

// Delete a product by ID
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deleted = await deleteProductModel(Number(id));
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};