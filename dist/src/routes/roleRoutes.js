"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Role_controller_1 = require("../controllers/Role.controller");
const router = (0, express_1.Router)();
router.get('/', Role_controller_1.getRoles);
router.get('/:id', Role_controller_1.getRole);
router.post('/', Role_controller_1.addRole);
router.put('/:id', Role_controller_1.updateRole);
router.delete('/:id', Role_controller_1.deleteRole);
exports.default = router;
//# sourceMappingURL=roleRoutes.js.map