const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Posts = db.define("posts", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  user_username: {
    type: DataTypes.STRING,
  },
  language: {
    type: DataTypes.ENUM,
    values: ["JavaScript", ".Net", "Python"],
  },
  title: {
    type: DataTypes.TEXT,
    required: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
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

module.exports = Posts;
