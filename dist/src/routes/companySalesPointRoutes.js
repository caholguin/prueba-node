"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompanySalesPoint_controller_1 = require("../controllers/CompanySalesPoint.controller");
const router = (0, express_1.Router)();
router.post('/', CompanySalesPoint_controller_1.createCompanySalesPoint);
exports.default = router;
//# sourceMappingURL=companySalesPointRoutes.js.map