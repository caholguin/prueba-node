"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_controller_1 = require("../controllers/company.controller");
const router = (0, express_1.Router)();
router.get('/', company_controller_1.getCompanies);
router.get('/:id', company_controller_1.getCompany);
router.post('/', company_controller_1.addCompany);
router.put('/:id', company_controller_1.updateCompany);
router.delete('/:id', company_controller_1.deleteCompany);
exports.default = router;
//# sourceMappingURL=companyRoutes.js.map