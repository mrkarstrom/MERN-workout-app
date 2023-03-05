require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes to use
app.use('/api/workouts', workoutRoutes);

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to db, listening on port: ', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
