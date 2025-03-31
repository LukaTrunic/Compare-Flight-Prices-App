//Flight model
const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    departureDate: {
      type: String,
      required: true
    },
    returnDate: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    availableSeats: {
      type: Number,
      required: true
    },
    flightDuration:{
      type: String,
      required: true
    },
    numOfStopovers:{
      type: Number,
      required: true
    }
});
  
exports.Flight = mongoose.model('Flight', flightSchema);