const express = require('express')
const router = express.Router()
const { Ticket } = require('../models')

router.get('/', async (req, res) => {
  const listOTickets = await Ticket.findAll()
  res.json(listOTickets)
})

router.get(`/:id`, async (req, res) => {
  const id = req.params.id
  const ticket = await Ticket.findByPk(id)
  res.json(ticket)
})

router.post('/', async (req, res) => {
  const ticket = req.body
  await Ticket.create(ticket)

  res.json(ticket)
})

module.exports = router