// config/database.js
const { Sequelize } = require('sequelize');

// Load database configuration from config.json
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

// Initialize Sequelize instance with the loaded configuration
const sequelize = new Sequelize(
    config.database, 
    config.username, 
    config.password, 
    {
        host: config.host,
        dialect: config.dialect,
        define: {
          freezeTableName: true,
          timestamps: false
        }
    });
  
    sequelize
    .authenticate()
    .then(() => {
      console.log('Database connection has been established successfully.');
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;
