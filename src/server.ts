import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../src/routes/userRoutes';
import companyRoutes from '../src/routes/companyRoutes';
import roleRoutes from '../src/routes/roleRoutes'
import userCompanyRoutes from '../src/routes/userCompanyRoutes'
import salesPointsRoutes from '../src/routes/salesPointsRoutes';
import companySalesPoint from '../src/routes/companySalesPointRoutes';
import db from '../src/database/connection';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        companies: '/api/companies',
        roles: '/api/roles',
        userCompany: '/api/userCompany',
        salesPoint: '/api/salesPoint',
        companySalesPoint: '/api/company-sales-points'       
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();
        this.routes();
        this.dbConnection();
    }


    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Db en linea');            
        } catch (error) {
            console.log(error);
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());       
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.companies, companyRoutes);
        this.app.use(this.apiPaths.roles, roleRoutes);
        this.app.use(this.apiPaths.userCompany, userCompanyRoutes);
        this.app.use(this.apiPaths.salesPoint, salesPointsRoutes);
        this.app.use(this.apiPaths.companySalesPoint, companySalesPoint);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

export default Server;

