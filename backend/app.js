// Required modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize express app
const app = express();

require('dotenv/config');

// Set up middleware
app.use(cors());
app.options('*', cors());

const api = process.env.API_URL;

// Define routes
const userRouter = require('./routers/users');
const flightRouter = require('./routers/flights');
const reservationRouter = require('./routers/reservations');

//the web can understan json
app.use(express.json());
app.use(morgan('tiny'));

// Use routes
app.use(`${api}/users`, userRouter);
app.use(`${api}/flights`, flightRouter);
app.use(`${api}/reservations`, reservationRouter);

// Set up MongoDB connection
mongoose.connect(process.env.CONNECTION_STRING, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  dbName: 'airline-db' 
}).then(() => {
  console.log('Connected');
})
.catch((err) => {
  console.error(err);
})

// Start server
app.listen(3000, () => {
  console.log(api);
  console.log(`Server listening on port 3000`);
})
