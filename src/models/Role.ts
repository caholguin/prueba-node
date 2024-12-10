import { DataTypes } from "sequelize";

import db from '../database/connection';

const Role = db.define('Roles', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false 
});



export default Role;