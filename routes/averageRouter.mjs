import express from 'express';
import averageController from '../controllers/averageController.mjs';

const router = express.Router();
router.get('/numbers/:numberid', averageController);

export default router;