const db = require("../models");

// Defining methods for the apiController
module.exports = {
  findAll: function(req, res) {
    db.Api.find(req.query)
      .then(dbApi => res.json(dbApi))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Api.findById(req.params.id)
      .then(dbApi => res.json(dbApi))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Api.create(req.body)
      .then(dbApi => res.json(dbApi))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Api.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbApi => res.json(dbApi))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Api.findById(req.params.id)
      .then(dbApi => dbApi.remove())
      .then(dbApi => res.json(dbApi))
      .catch(err => res.status(422).json(err));
  }
};
