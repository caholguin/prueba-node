"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Company = connection_1.default.define('Companies', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    nit: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.default = Company;
//# sourceMappingURL=Company.js.map