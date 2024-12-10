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
exports.deleteRole = exports.updateRole = exports.addRole = exports.getRole = exports.getRoles = void 0;
const Role_1 = __importDefault(require("../models/Role"));
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield Role_1.default.findAll();
        res.json(roles);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching Roles' });
    }
});
exports.getRoles = getRoles;
const getRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield Role_1.default.findByPk(id);
        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }
        res.json(role);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching Role' });
    }
});
exports.getRole = getRole;
const addRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newRole = yield Role_1.default.create(body);
        res.status(201).json({
            msg: 'New Role created',
            Role: newRole
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating Role' });
    }
});
exports.addRole = addRole;
const updateRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id } = req.params;
        const [updated] = yield Role_1.default.update(body, {
            where: { id }
        });
        if (updated) {
            const updateRole = yield Role_1.default.findByPk(id);
            return res.json({
                msg: 'Role updated',
                Role: updateRole
            });
        }
        res.status(404).json({ error: 'Role not found' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating Role' });
    }
});
exports.updateRole = updateRole;
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield Role_1.default.destroy({
            where: { id }
        });
        if (deleted) {
            return res.json({
                msg: 'Role deleted',
                id
            });
        }
        res.status(404).json({ error: 'Role not found' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting Role' });
    }
});
exports.deleteRole = deleteRole;
//# sourceMappingURL=Role.controller.js.map