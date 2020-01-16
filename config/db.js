const Sequelize = require('sequelize')

const db = new Sequelize('PR_ku', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log
})

module.exports = db