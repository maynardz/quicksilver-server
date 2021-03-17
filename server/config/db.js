const env = require('./env');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    }
});

module.exports = sequelize;