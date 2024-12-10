"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserCompany_controller_1 = require("../controllers/UserCompany.controller");
const router = (0, express_1.Router)();
router.post('/', UserCompany_controller_1.createUserCompany);
exports.default = router;
//# sourceMappingURL=userCompanyRoutes.js.map