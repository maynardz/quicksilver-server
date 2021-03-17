const env = require('./env');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(env.DATABASE_URL, {
    dialect: 'postgres',
});

module.exports = sequelize;