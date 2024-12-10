import { DataTypes, Model } from 'sequelize';
import db from '../database/connection';
import User from './user'; 
import Company from './Company';
import Role from './Role'; 


const UserCompany = db.define('UserCompany', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      references: {
        model: User,
        key: 'id',
      },
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      references: {
        model: Company,
        key: 'id',
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: 'id',
      },
    },
  }, {   
    timestamps: false, 
    tableName: 'UserCompany', 
  });
  

export default UserCompany;


