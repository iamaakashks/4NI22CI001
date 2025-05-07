import express from 'express';
import averageController from '../controller/averageController.mjs';

const router = express.Router();

router.get('/numbers/:numberid', averageController);

export default router;