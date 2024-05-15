const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Photos = sequelize.define('Photos', {
    albumId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false
         
       },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
       type: DataTypes.STRING,
       allowNull: false
     },
      thumbnailUrl: {
        type: DataTypes.STRING,
        allowNull: false
      }
});

// Define custom method to fetch all photos
Photos.getAllPhotos = async () => {
  try {
    const photos = await Photos.findAll({
      attributes: ['albumId', 'id', 'title', 'url', 'thumbnailUrl'],
      limit: 100,
      order: [['id', 'ASC']],
    });
    return photos;
  } catch (error) {
    throw new Error('Error fetching photos');
  }
};

module.exports = Photos;
