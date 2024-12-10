"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const user_1 = __importDefault(require("./user"));
const Company_1 = __importDefault(require("./Company"));
const Role_1 = __importDefault(require("./Role"));
const UserCompany = connection_1.default.define('UserCompany', {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: user_1.default,
            key: 'id',
        },
    },
    company_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Company_1.default,
            key: 'id',
        },
    },
    role_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role_1.default,
            key: 'id',
        },
    },
}, {
    timestamps: false,
    tableName: 'UserCompany',
});
exports.default = UserCompany;
//# sourceMappingURL=UserCompany.js.map