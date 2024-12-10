"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompanySalesPoint = void 0;
const CompanySalesPoint_1 = __importDefault(require("../models/CompanySalesPoint"));
const createCompanySalesPoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { company_id, sales_point_id } = req.body;
    try {
        if (!company_id || !sales_point_id) {
            return res.status(400).json({
                message: 'Company ID and Sales Point ID are required',
            });
        }
        const companySalesPoint = yield CompanySalesPoint_1.default.create({
            company_id,
            sales_point_id,
        });
        return res.status(201).json({
            message: 'CompanySalesPoint created successfully',
            data: companySalesPoint,
        });
    }
    catch (error) {
        console.error('Error creating CompanySalesPoint:', error);
        return res.status(500).json({
            message: 'Error creating CompanySalesPoint',
            error,
        });
    }
});
exports.createCompanySalesPoint = createCompanySalesPoint;
//# sourceMappingURL=CompanySalesPoint.controller.js.map