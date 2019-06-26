let express = require('express')
let router = express.Router()

// QueryString => query prop on req obj
// localhost:3000/person?name=kitavi&age=20
router.get('/person', ( req, res) => {
  if (req.query.name) {
    res.send(`You req person, ${req.query.name}`)
  } else {
    res.send('You req person')
  }
})

// params prop on req obj
// localhost:3000/person/kitavi
router.get('/person/:name', ( req, res) => {
  res.send(`You req person, ${req.params.name}`)
})

module.exports = router
