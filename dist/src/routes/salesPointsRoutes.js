"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salesPoints_controller_1 = require("../controllers/salesPoints.controller");
const router = (0, express_1.Router)();
router.post('/', salesPoints_controller_1.createSalesPoint);
exports.default = router;
//# sourceMappingURL=salesPointsRoutes.js.map