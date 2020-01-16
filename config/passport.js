const passport = require('passport')
const Strategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')

//Load User Model
const User = require('../models/User')

passport.use(
  new Strategy(function (username, password, cb) {
    User.findOne({
        where: {
          username: username
        }
      })
      .then(user => {
        if (!user) {
          return cb(null, false)
        }
        const compare = bcrypt.compareSync(password, user.password)
        if (!compare) {
          return cb(null, false)
        }
        return cb(null, user)
      })
      .catch(err => {
        if (err) {
          return cb(err)
        }
      })
  })
)

passport.serializeUser(function (user, cb) {
  cb(null, user.id_user)
})

passport.deserializeUser(function (id_user, cb) {
  User.findOne({
      where: {
        id_user: id_user
      }
    })
    .then(user => {
      cb(null, user)
    })
    .catch(err => {
      return cb(err)
    })
})

module.exports = passport