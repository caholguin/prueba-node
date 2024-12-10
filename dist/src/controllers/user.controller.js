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
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching user' });
    }
});
exports.getUser = getUser;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newUser = yield user_1.default.create(body);
        res.status(201).json({
            msg: 'New User created',
            user: newUser
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});
exports.addUser = addUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id } = req.params;
        const [updated] = yield user_1.default.update(body, {
            where: { id }
        });
        if (updated) {
            const updatedUser = yield user_1.default.findByPk(id);
            return res.json({
                msg: 'User updated',
                user: updatedUser
            });
        }
        res.status(404).json({ error: 'User not found' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating user' });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield user_1.default.destroy({
            where: { id }
        });
        if (deleted) {
            return res.json({
                msg: 'User deleted',
                id
            });
        }
        res.status(404).json({ error: 'User not found' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map