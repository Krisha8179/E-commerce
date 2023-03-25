const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs','root','Krish@8179',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;