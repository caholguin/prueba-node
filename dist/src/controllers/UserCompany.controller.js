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
exports.createUserCompany = void 0;
const UserCompany_1 = __importDefault(require("../models/UserCompany"));
const createUserCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, company_id, role_id } = req.body;
        console.log(user_id, company_id, role_id);
        if (!user_id || !company_id || !role_id) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const userCompany = yield UserCompany_1.default.create({ user_id, company_id, role_id });
        res.status(201).json({
            message: 'UserCompany created successfully',
            data: userCompany,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating UserCompany', error });
    }
});
exports.createUserCompany = createUserCompany;
//# sourceMappingURL=UserCompany.controller.js.map