import {Router} from 'express';

import {
    getCompanies,
    getCompany,
    addCompany,
    updateCompany,
    deleteCompany,
} from '../controllers/company.controller'

const router = Router();

router.get('/',getCompanies);
router.get('/:id',getCompany);
router.post('/',addCompany);
router.put('/:id',updateCompany);
router.delete('/:id',deleteCompany);


export default router;