const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://mongo:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(' Connected to MongoDB')};
app.get('/', (req, res) => res.send('hello from backend.............'));
  
app.listen(3000,{}=> console.log('server running on port 3000'));
