let CustomerModel = require('../models/customer.model')
let express = require('express')
let router = express.Router()

// Create a new Customer
// POST /customer
router.post('/customer', ( req, res) => {
  if (!req.body) {
    return res.status(400).send('Req body missing')
  }

  let model = new CustomerModel(req.body)
  model.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }

      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET /customer?email=:email
router.get('/customer', ( req, res ) => {
  if (!req.query.email) {
    return res.status(400).send('Missing URL param')
  }
  CustomerModel.findOne({
    email: req.query.email
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// PUT /customer?email=:email
router.put('/customer', ( req, res ) => {
  if (!req.query.email) {
    return res.status(400).send('Missing URL param')
  }
  CustomerModel.findOneAndUpdate(
    {
      email: req.query.email
    },
    req.body,
    { new: true } // To send new object
  )
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// DELETE /customer?email=:email
router.delete('/customer', ( req, res ) => {
  if (!req.query.email) {
    return res.status(400).send('Missing URL param')
  }
  CustomerModel.findOneAndRemove(
    {
      email: req.query.email
    },
  )
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router
