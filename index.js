const express = require('express')
const path = require('path')
const app = express()
const expHbs = require('express-handlebars')
const port = 3000

const hbs = expHbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})


app.listen(port, () => {
  console.log(`server running ${port}`);
})