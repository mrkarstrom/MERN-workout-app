require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes to use
app.use('/api/workouts', workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log('Listening on port secret port');
});
