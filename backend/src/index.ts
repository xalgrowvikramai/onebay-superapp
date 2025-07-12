import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import appRoutes from './app';
import { connectDB } from './config/db';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Connect to the database
connectDB();

// Routes
app.use('/api', appRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});