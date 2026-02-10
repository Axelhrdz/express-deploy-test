import express from 'express';
import { healthRoutes } from './modules/health/health.routes.js';

export const app = express();

app.use(express.json());

//routes
app.use('/health', healthRoutes);


//fallback
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});