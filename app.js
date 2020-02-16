const express = require('express')
const app = express()
const db = require('./config/db')
const bp = require('body-parser')
const PORT = process.env.PORT || 3000
const passport = require('./config/passport')
const methodOveride = require('method-override')
const path = require('path')

app.use('/assets', express.static(path.join(__dirname,'assets')))

//methodOverride
app.use(methodOveride('_method'))

//Pasport Session
app.use(
  require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  })
)

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(function (req, res, next) {
  res.locals.user = req.user
  next()
})

app.set('view engine', 'ejs')

//Body-Parser
app.use(bp.json())
app.use(
  bp.urlencoded({
    extended: false
  })
)

//router
app.use('/', require('./routes/api/main'))

//testing db connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`))