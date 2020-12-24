import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/error.middleware.js'

import productRoutes from './routes/product.routes.js';

dotenv.config()
connectDB()

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound)

app.use(errorHandler)


const { PORT = 5000, NODE_ENV = 'development' } = process.env;

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}!`);
});