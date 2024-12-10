import {Router} from 'express';

import {
    getRoles,
    getRole,
    addRole,
    updateRole,
    deleteRole,
} from '../controllers/Role.controller'

const router = Router();

router.get('/',getRoles);
router.get('/:id',getRole);
router.post('/',addRole);
router.put('/:id',updateRole);
router.delete('/:id',deleteRole);


export default router;