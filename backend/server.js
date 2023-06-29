// environement variables
require('dotenv').config({ path: './config/.env'});
// requirements
const express = require('express');
const cors = require('cors');

// db connection
require('./config/db');

// routes
const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');

// init app
const app = express();

// middlewares
// cross-origin resource sharing
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
};
app.use(cors(corsOptions));
// body-parser
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// listen for requests
const PORT = process.env.PORT; //5000
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) });