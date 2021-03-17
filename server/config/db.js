const env = require('./env');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: env.NODE_ENV === 'production',
    dialectOptions: {
        ssl: env.NODE_ENV === 'production'
    }
});

module.exports = sequelize;