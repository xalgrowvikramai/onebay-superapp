import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export const getProducts = async (): Promise<Product[]> => {
  const { rows } = await pool.query('SELECT * FROM products');
  return rows;
};

export const getProductById = async (id: number): Promise<Product | null> => {
  const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
  return rows[0] || null;
};

export const createProduct = async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> => {
  const { name, description, price, stock } = product;
  const { rows } = await pool.query(
    'INSERT INTO products (name, description, price, stock, createdAt, updatedAt) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *',
    [name, description, price, stock]
  );
  return rows[0];
};

export const updateProduct = async (id: number, product: Partial<Omit<Product, 'id' | 'createdAt'>>): Promise<Product | null> => {
  const { name, description, price, stock } = product;
  const { rows } = await pool.query(
    'UPDATE products SET name = COALESCE($1, name), description = COALESCE($2, description), price = COALESCE($3, price), stock = COALESCE($4, stock), updatedAt = NOW() WHERE id = $5 RETURNING *',
    [name, description, price, stock, id]
  );
  return rows[0] || null;
};

export const deleteProduct = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM products WHERE id = $1', [id]);
  return (result.rowCount ?? 0) > 0;
};