const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var corsOptions = {
  origin: ['*']
};
const db = require('./app/model');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get('/', (req, res) => {
  res.json({ message: 'This is the API connection to mongodb countries' });
});
require('./app/routes/countries.routes')(app);
require('./app/routes/favorites.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});