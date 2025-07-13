import { Pool } from 'pg';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default pool;
export { pool };

