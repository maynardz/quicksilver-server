const env = require('./env');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.DATABASE_URL, {
    dialect: env.DATABASE_DIALECT
})

sequelize.authenticate()
    .then(() => console.log('postgres db is connected'))
    .catch(err => console.log(err));

// Connect all the models/tables in the database to a db object,
// so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../models/users')(sequelize, Sequelize);
db.posts = require('../models/posts')(sequelize, Sequelize);
db.comments = require('../models/comments')(sequelize, Sequelize);

//Relations
db.comments.belongsTo(db.posts);
db.posts.hasMany(db.comments);
db.posts.belongsTo(db.users);
db.users.hasMany(db.posts);

// console.log(db);

module.exports = db;