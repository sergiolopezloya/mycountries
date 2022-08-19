const db = require('../model');
const Favorites = db.favorites;

exports.findAll = (req, res) => {
  const email = req.query.email;
  const page = parseInt(req.query.page) || 0;
  const limit = 10;
  var condition = email ? { email: { $regex: new RegExp(email), $options: 'i' } } : {};
  Favorites
    .find(condition)
    .limit(limit)
    .skip(limit * page)
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving favorites.'
      });
    }
    );
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const favorite = new Favorites({
    country_id: req.body.country_id,
    email: req.body.email
  });

  // Save Favorite in the database
  favorite
    .save()
    .then(data => {
      res.send({
        data: data,
        status: "success"
      });
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    }
    );
};