const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'Kp@7000584374', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;