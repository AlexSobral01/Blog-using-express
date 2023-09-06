const Sequelize = require('sequelize');

const connection = new Sequelize('blog', 'root', '04177110', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;