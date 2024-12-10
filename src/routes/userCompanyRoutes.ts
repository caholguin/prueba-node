import {Router} from 'express';

import {
    createUserCompany
} from '../controllers/UserCompany.controller'

const router = Router();

router.post('/',createUserCompany);



export default router;