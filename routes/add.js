const { Router } = require('express')
const router = Router()


router.get('/', (req, res) => {
  res.render('add', {
    title: 'Добавить курс',
    isAddCourses: true

  })
})


module.exports = router