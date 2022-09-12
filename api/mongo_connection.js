const mongoose = require('mongoose');
const mongodb_uri = 'mongodb://localhost:27017/videogames';
mongoose
  .connect(mongodb_uri)
  .then((db) => console.log('Connecting to mongodb'))
  .catch((err) => console.log('Error connecting to mongodb => ', err));
module.exports = mongoose;
