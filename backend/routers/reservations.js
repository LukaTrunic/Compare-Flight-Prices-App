// reservations.js
const {Reservation} = require('../models/reservation');
const express = require('express');
const router = express.Router();

const {Flight} = require('../models/flight');
const {User} = require('../models/user');

// GET all reservations
router.get('/', async (req, res) => {
  const reservationList = await Reservation.find().populate('user').populate('flight');

  if(!reservationList){
    res.status(500).json({success:false})
  }

  res.status(200).send(reservationList);
});

// GET a single reservation by id
router.get('/:id', async (req, res) => {
  const getReservation = await Reservation.findById(req.params.id);

  if(!getReservation){
    res.status(500).json({
      success: false
    })
  }

  res.status(200).send(getReservation);
});

// CREATE a new reservation
router.post('/', async (req, res) => {
  let reservation = new Reservation({
    user: req.body.user,
    flight: req.body.flight,
    numberOfSeats: req.body.numberOfSeats,
    totalPrice: req.body.totalPrice,
    paymentMethod: req.body.paymentMethod,
    createdAt: req.body.createdAt
  });
  
  reservation = await reservation.save();

  if(!reservation)
  return res.status(404).send('Err: cannot be created.')

  res.send(reservation);
});

// UPDATE a reservation by id
router.put('/:id', async (req, res) => {
    let reservation = await Reservation.findByIdAndUpdate(
      req.params.id, {
        user: req.body.user,
        flight: req.body.flight,
        numberOfSeats: req.body.numberOfSeats,
        totalPrice: req.body.totalPrice,
        paymentMethod: req.body.paymentMethod,
        createdAt: req.body.createdAt
      }, {
        new: true
      })
    if(!reservation)
      return res.status(404). send('Err: cannot be created')
  
    res.send(reservation)
  })
  
  // DELETE a reservation by id
  router.delete('/:id', async (req, res) => {
    Reservation.findByIdAndRemove(req.params.id).then(reservation => {
      if(reservation){
        return res.status(200).json({
          success: true,
          message: 'Reservation is deleted'
        })
      }else{
        return res.status(404).json({
          success: false,
          message: 'Reservation not found'
        })
      }
    }).catch(err => {
      return res.status(400).json({
        success: false,
        error: err
      })
    })
  })

module.exports = router;