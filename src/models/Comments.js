const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Comments = sequelize.define('Comments', {
  postId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Define custom method to fetch all comments
Comments.getAllComments = async () => {
  try {
    const comments = await Comments.findAll({
      attributes: ['postId', 'id', 'name', 'email', 'body'],
      limit: 100,
      order: [['id', 'ASC']],
    });
    return comments;
  } catch (error) {
    throw new Error('Error fetching comments');
  }
};

// Sync
Comments.sync()
    .then(() => {
        console.log('Comment model synchronized with database');
    })
    .catch((error) => {
        console.error('Error synchronizing Comment model:', error);
    });

module.exports = Comments;
