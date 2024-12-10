import { DataTypes } from "sequelize";

import db from '../database/connection';

const Company = db.define('Companies', {
    name: {
        type: DataTypes.STRING
    },
    nit: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false 
});



export default Company;