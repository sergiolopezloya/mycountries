const db = require('../model');
const Countries = db.countries;
// Retrieve all Countries from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  const page = parseInt(req.query.page) || 0;
  const limit = 5;
  var condition = name ? { name: { $regex: new RegExp(name), $options: 'i' } } : {};
  Countries
    .find(condition)
    .limit(limit)
    .skip(limit * page)
    .sort('name')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving countries.'
      });
    });
};

// Find a single Country with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Countries.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Country with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Countryss with id=" + id });
    });
};
