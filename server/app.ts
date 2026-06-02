import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import storageUnitRoutes from './routes/storageUnitRoutes.js';
import sensorRoutes from './routes/sensorRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/storage-units', storageUnitRoutes);
app.use('/api/sensors', sensorRoutes);

app.use(errorHandler);

export default app;
