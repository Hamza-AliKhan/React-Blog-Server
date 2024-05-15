const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Albums = sequelize.define('Albums', {
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
});

// Define custom method to fetch all albums
Albums.getAllAlbums = async () => {
  try {
    const albums = await Albums.findAll({
      attributes: ['userId', 'id', 'title'],
      limit: 100,
      order: [['id', 'ASC']],
    });
    return albums;
  } catch (error) {
    throw new Error('Error fetching albums');
  }
};

module.exports = Albums;
