const express = require('express')
const expHbs = require('express-handlebars')
const path = require('path')

const app = express()

const port = 3000
const addRouter = require('./routes/add')
const coursesRouter = require('./routes/courses')
const homeRouter = require('./routes/home')

const hbs = expHbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/add', addRouter)
app.use('/courses', coursesRouter)
app.use('/', homeRouter)






app.listen(port, () => {
  console.log(`server running ${port}`);
})