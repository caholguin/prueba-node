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
exports.deleteCompany = exports.updateCompany = exports.addCompany = exports.getCompany = exports.getCompanies = void 0;
const Company_1 = __importDefault(require("../models/Company"));
const getCompanies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companies = yield Company_1.default.findAll();
        res.json(companies);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching Companys' });
    }
});
exports.getCompanies = getCompanies;
const getCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const company = yield Company_1.default.findByPk(id);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching Company' });
    }
});
exports.getCompany = getCompany;
const addCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newCompany = yield Company_1.default.create(body);
        res.status(201).json({
            msg: 'New Company created',
            Company: newCompany
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating Company' });
    }
});
exports.addCompany = addCompany;
const updateCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id } = req.params;
        const [updated] = yield Company_1.default.update(body, {
            where: { id }
        });
        if (updated) {
            const updatedCompany = yield Company_1.default.findByPk(id);
            return res.json({
                msg: 'Company updated',
                Company: updatedCompany
            });
        }
        res.status(404).json({ error: 'Company not found' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating Company' });
    }
});
exports.updateCompany = updateCompany;
const deleteCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield Company_1.default.destroy({
            where: { id }
        });
        if (deleted) {
            return res.json({
                msg: 'Company deleted',
                id
            });
        }
        res.status(404).json({ error: 'Company not found' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting Company' });
    }
});
exports.deleteCompany = deleteCompany;
//# sourceMappingURL=company.controller.js.map