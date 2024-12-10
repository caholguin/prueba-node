import { Router } from 'express';
import { createCompanySalesPoint } from '../controllers/CompanySalesPoint.controller';

const router = Router();

router.post('/', createCompanySalesPoint);

export default router;
