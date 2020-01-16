const db = require('../config/db')
const Sequelize = require('sequelize')

const todo = db.define('todolist', {
  id_todo: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_user: {
    type: Sequelize.INTEGER
  },
  nama_todo: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  deadline: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = todo