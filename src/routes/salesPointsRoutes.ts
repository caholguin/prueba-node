import { Router } from 'express';
import { createSalesPoint } from '../controllers/salesPoints.controller';

const router = Router();

router.post('/', createSalesPoint);

export default router;
