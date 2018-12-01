const express = require('express'); // routes
const mongoose = require('mongoose'); // interacting with DB
const bodyParser = require('body-parser'); // handles POSTs
const items = require('./routes/api/items');
const app = express();
//Bodyparser Middleware
app.use(bodyParser.json());
// DB configuration
const db = require('./config/keys')
  .mongoURI;
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(error));
// use routes
app.use('/api/items', items);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server has started on port ${port}`));