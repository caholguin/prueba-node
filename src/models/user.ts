import { DataTypes } from "sequelize";

import db from '../database/connection';

const User = db.define('Users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false 
});



export default User;