const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Posts = sequelize.define('Posts', {
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Define custom method to fetch all posts
Posts.getAllPosts = async () => {
  try {
    const posts = await Posts.findAll({
      attributes: ['userId', 'id', 'title', 'body'],
      limit: 100,
      order: [['id', 'ASC']],
    });
    return posts;
  } catch (error) {
    throw new Error('Error fetching posts');
  }
};

module.exports = Posts;
