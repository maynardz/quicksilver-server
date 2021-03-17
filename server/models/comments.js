const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Comments = db.define("comments", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  post_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    required: true,
  },
  commenter_username: {
    type: DataTypes.STRING,
    required: true,
  },
  // commenter_email: {
  //     type: DataTypes.STRING,
  //     required: true
  // },
  // status: {
  //     type: DataTypes.ENUM,
  //     values: ['approved', 'rejected', 'in review']

  // },
  upvote: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  code: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: DataTypes.DATE,
  }, {
  underscored: true
  }
);

module.exports = Comments;