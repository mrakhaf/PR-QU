const router = require('express').Router()
const Todo = require('../../models/Todo')
const User = require('../../models/User')

//Tambah Todo
router.post('/:username/tambah', (req, res) => {
  let usnm = req.params.username
  User.findOne({
      where: {
        username: usnm
      }
    })
    .then(user => {
      if (!user) {
        res.json({
          msg: 'Error'
        })
      } else {
        Todo.create({
            id_user: user.id_user,
            nama_todo: req.body.judul,
            description: req.body.desc,
            deadline: req.body.deadline
          })
          .then(todo => {
            // res.json({
            //   msg: 'success',
            //   data: todo
            // })
            res.redirect('/')

          })
          .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
})


//Delete Todo
router.delete('/hapus/:id_todo', (req, res) => {
  Todo.destroy({
      where: {
        id_todo: req.params.id_todo
      }
    })
    .then(result => {
      res.redirect('/')
    })
})

module.exports = router