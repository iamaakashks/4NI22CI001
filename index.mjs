import express from 'express';
import averageRouter from './controllers/averageController.mjs';
import errorHandler from './middleware/errorMiddleware.mjs';
import './config/dotenv.js'
const app = express();
const port = process.env.PORT || 9876;

app.get('/numbers/:numberid', averageRouter);

app.use(errorHandler);
import express from 'express';
import dotenv from 'dotenv';
import averageRouter from './routes/averageRouter.mjs';
import errorHandler from './middleware/errorMiddleware.mjs';

dotenv.config();
const app = express();
const port = process.env.PORT || 9876;

app.use('/', averageRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});