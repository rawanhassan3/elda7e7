import express from 'express';
import { corsMiddleware } from './middleware/cors.middleware.js';
import healthRoutes from './routes/health.routes.js';

const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.use('/api', healthRoutes);

export default app;
