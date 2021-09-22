const path = require('path')
const fs = require('fs')
const { count } = require('console')


const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'card.json'
)
class Card {
  static async add(course) {
    const card = await Card.fetсh()
    const idx = card.courses.findIndex(c => c.id === course.id)
    const candidate = card.courses[idx]
    if (candidate) {
      // курс уже есть 
      candidate.count++
      card.courses[idx] = candidate
    } else {
      // нужно добавить 
      course.count = 1
      card.courses.push(course)
    }
    card.price += +count.price
    return new Promise((resolve, reject) => {
      fs.writeFile(p, JSON.stringify(card), err => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }
  static async fetсh() {
    return new Promise((resolve, reject) => {
      fs.readFile(p, 'utf-8', (err, content) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(content))
        }
      })
    })
  }
}


module.exports = Card