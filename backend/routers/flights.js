// flights.js
const {Flight} = require('../models/flight');
const express = require('express');
const router = express.Router();

// GET all flights
router.get('/', async (req, res) => {
  const flightList = await Flight.find();

  if(!flightList){
    res.status(500).json({success:false})
  }

  res.status(200).send(flightList);
});

// GET a single flight by id
router.get('/:id', async (req, res) => {
  const getFlight = await Flight.findById(req.params.id);

  if(!getFlight){
    res.status(500).json({
      success: false
    })
  }

  res.status(200).send(getflight);
});

// CREATE a new flight
router.post('/', async (req, res) => {
  let flight = new Flight({
    airline: req.body.airline,
    destination: req.body.destination,
    departureDate: req.body.departureDate,
    returnDate: req.body.returnDate,
    price: req.body.price,
    availableSeats: req.body.availableSeats,
    flightDuration: req.body.flightDuration,
    numOfStopovers: req.body.numOfStopovers
  });
  
  flight = await flight.save();

  if(!flight)
  return res.status(404).send('Err: cannot be created.')

  res.send(flight);
});

// UPDATE a flight by id
router.put('/:id', async (req, res) => {
  let flight = await Flight.findByIdAndUpdate(
    req.params.id, {
      airline: req.body.airline,
      destination: req.body.destination,
      departureDate: req.body.departureDate,
      returnDate: req.body.returnDate,
      price: req.body.price,
      availableSeats: req.body.availableSeats,
      flightDuration: req.body.flightDuration,
      numOfStopovers: req.body.numOfStopovers
    }, {
      new: true
    })
  if(!flight)
    return res.status(404). send('Err: cannot be created')

  res.send(flight)
})

// DELETE a flight by id
router.delete('/:id', async (req, res) => {
  Flight.findByIdAndRemove(req.params.id).then(flight => {
    if(flight){
      return res.status(200).json({
        success: true,
        message: 'Flight is deleted'
      })
    }else{
      return res.status(404).json({
        success: false,
        message: 'Flight not found'
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
