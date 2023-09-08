import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routes/indexRoutes.js';
import errorHandler from './middlewares/errorHandlerMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}/`));