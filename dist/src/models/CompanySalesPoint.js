"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Company_1 = __importDefault(require("./Company"));
const SalesPoint_1 = __importDefault(require("./SalesPoint"));
const CompanySalesPoint = connection_1.default.define('CompanySalesPoint', {
    company_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Company_1.default,
            key: 'id',
        },
    },
    sales_point_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: SalesPoint_1.default,
            key: 'id',
        },
    },
}, {
    timestamps: false,
    tableName: 'CompanySalesPoint',
});
exports.default = CompanySalesPoint;
//# sourceMappingURL=CompanySalesPoint.js.map