import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/indexRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}/`));