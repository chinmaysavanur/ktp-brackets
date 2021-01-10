const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // allows you to use .env variables

// mongoose
// .connect('mongodb://127.0.0.1:27017/ktp-tourney', { useNewUrlParser: true })
// .catch(e => {
//     console.error('Connection error', e.message);
// })

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
