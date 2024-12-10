import { DataTypes } from 'sequelize';
import db from '../database/connection';
import Company from './Company'; 
import SalesPoint from './SalesPoint'; 

const CompanySalesPoint = db.define('CompanySalesPoint', {
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Company,
      key: 'id',
    },
  },
  sales_point_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: SalesPoint,
      key: 'id',
    },
  },
}, {
  timestamps: false, 
  tableName: 'CompanySalesPoint',
});

export default CompanySalesPoint;
