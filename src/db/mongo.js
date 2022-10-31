//connect to mongodb
const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });
