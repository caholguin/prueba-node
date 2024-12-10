import {Sequelize } from 'sequelize';

const db = new Sequelize('prueba','root','1798',{
    host: 'localhost',
    dialect: 'mysql',
});


export default db;