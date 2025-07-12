import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const createUser = async (user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
  const { username, email, password } = user;
  const result = await pool.query(
    'INSERT INTO users (username, email, password, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *',
    [username, email, password]
  );
  return result.rows[0];
};

export const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows.length ? result.rows[0] : null;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows.length ? result.rows[0] : null;
};

export const updateUser = async (id: number, user: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>): Promise<User | null> => {
  const { username, email, password } = user;
  const result = await pool.query(
    'UPDATE users SET username = COALESCE($1, username), email = COALESCE($2, email), password = COALESCE($3, password), updated_at = NOW() WHERE id = $4 RETURNING *',
    [username, email, password, id]
  );
  return result.rows.length ? result.rows[0] : null;
};

export const deleteUser = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
};