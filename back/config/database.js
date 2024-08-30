const { Sequelize } = require('sequelize');
const dbConfig = require('./dbConfig');

const sequelize = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect
  }
);

module.exports = sequelize;
