import express from 'express';
import './config/dotenv.mjs';
import averageRouter from './routes/averageRouter.mjs';
import errorHandler from './middleware/errorMiddleware.mjs';

const app = express();
const PORT = process.env.PORT || 9876;

app.use('/', averageRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});