const router = require('express').Router()
const User = require('../../models/User')

router.get('/:username', (req, res) => {
  User.findOne({
      where: {
        username: req.params.username
      }
    })
    .then(user => {
      if (!user) {
        res.json({
          msg: 'not found'
        })
      } else {
        res.json({
          msg: 'found',
          data: user
        })
      }
    })
})

module.exports = router