var express = require('express')
var router = express.Router()
var Videogame = require('../models/modelVideoGames.js')

router.post('/', async function (req, res, next) {
  const videogame = new Videogame({
    name: req.body.name,
    price: req.body.price,
    classification: req.body.classification,
  })
  await videogame.save()
  res.send(videogame)
})

router.get('/', async function (req, res) {
  const videogame = await Videogame.find()
  res.send(videogame)
})

router.get('/:id', async function (req, res) {
  const videogame = await Videogame.findById(req.params.id)
  res.send(videogame)
})

router.put('/', async function (req, res) {
  await Videogame.findOneAndUpdate(
    {
      _id: req.body._id,
    },
    {
      name: req.body.name,
      price: req.body.price,
      classification: req.body.classification,
    }
  )
  res.send(true)
})

router.delete('/:id', async function (req, res) {
  await Videogame.findOneAndDelete({ _id: req.params.id })
  res.send(true)
})

module.exports = router
