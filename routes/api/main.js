const router = require('express').Router()
const User = require('../../models/User')
const Todo = require('../../models/Todo')
const bcrypt = require('bcryptjs')
const passport = require('passport')

router.use('/user', require('./user'))
router.use('/todo', require('./todo'))

//Home
router.get('/', (req, res) => {
  if (req.user) {
    Todo.findAll({
      where: {
        id_user: req.user.id_user
      }
    }).then(todo => {
      if (todo) {
        res.render('home', {
          todo
        })
      }
    })
  } else {
    res.render('loginregister')
  }
})


router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

router.get(
  '/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function (req, res) {
    res.render('profile', {
      user: req.user
    })
  }
)

//register
router.post('/register', (req, res) => {
  User.create({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    .then(user => {
      res.render('register', {
        msg: 'Success create account',
        user: user
      })
    })
    .catch(err => console.log(err))
})

//Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next)
})


module.exports = router