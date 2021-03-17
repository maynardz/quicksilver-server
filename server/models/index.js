const db = require('../config/db');

const UsersModel = require('./users');
const PostsModel = require('./posts');
const CommentsModel = require('./comments');

CommentsModel.belongsTo(PostsModel, {
    foreignKey: {
        name: 'postedBy'
    }
});
PostsModel.hasMany(CommentsModel);
PostsModel.belongsTo(UsersModel, {
    foreignKey: {
        name: 'createdBy'
    }
});
UsersModel.hasMany(PostsModel);

module.exports = {
    dbConnection: db,
    models: {
        UsersModel, 
        PostsModel, 
        CommentsModel
    }
};