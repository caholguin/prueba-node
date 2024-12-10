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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("../src/routes/userRoutes"));
const companyRoutes_1 = __importDefault(require("../src/routes/companyRoutes"));
const roleRoutes_1 = __importDefault(require("../src/routes/roleRoutes"));
const userCompanyRoutes_1 = __importDefault(require("../src/routes/userCompanyRoutes"));
const salesPointsRoutes_1 = __importDefault(require("../src/routes/salesPointsRoutes"));
const companySalesPointRoutes_1 = __importDefault(require("../src/routes/companySalesPointRoutes"));
const connection_1 = __importDefault(require("../src/database/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users',
            companies: '/api/companies',
            roles: '/api/roles',
            userCompany: '/api/userCompany',
            salesPoint: '/api/salesPoint',
            companySalesPoint: '/api/company-sales-points'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
        this.dbConnection();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Db en linea');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.users, userRoutes_1.default);
        this.app.use(this.apiPaths.companies, companyRoutes_1.default);
        this.app.use(this.apiPaths.roles, roleRoutes_1.default);
        this.app.use(this.apiPaths.userCompany, userCompanyRoutes_1.default);
        this.app.use(this.apiPaths.salesPoint, salesPointsRoutes_1.default);
        this.app.use(this.apiPaths.companySalesPoint, companySalesPointRoutes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map