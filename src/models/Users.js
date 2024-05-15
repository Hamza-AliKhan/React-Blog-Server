const { DataTypes,Model } = require('sequelize');
const sequelize = require('../config/database.js');

class Users extends Model {}

Users.init(
    {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           
         },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        username: {
         type: DataTypes.STRING,
         allowNull: false
       },
        email: {
         type: DataTypes.STRING,
         allowNull: false
       },
         address: {
           type: DataTypes.JSON,
           allowNull: false,
         },
         phone: {
             type: DataTypes.STRING,
             allowNull: false
         },
         website:{
             type: DataTypes.STRING,
             allowNull: false
         },
         company: {
             type: DataTypes.JSON,
             allowNull: false,
         }
     
         
     },{
    sequelize,
    modelName: 'users',
},
);

// Define custom method to fetch all Users
Users.getAllUsers = async () => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'name', 'username', 'email','address','phone', 'website', 'company'],
      limit: 100,
      order: [['id', 'ASC']],
    });
    return users;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

module.exports = Users;
