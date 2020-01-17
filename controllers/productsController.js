const db = require("../models");

// STANDARD CREATE READ UPDATE DELETE
// YOU CAN ALMOST COPY THIS VERBATIM
// READ
    // READ ALL
    // READ ONE
// CREATE 
// UPDATE
// DELETE

// ** make sure you change the model name after db.
// ** watch for the sort function it depends on the date column

module.exports = {

    findAll: function(req, res) {
        db.Product
          .find(req.query)
          .sort({ date: -1 }) 
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Product
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        //console.log(req.body);
        //console.log(db);
        //console.log(db.Product);
        db.Product
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Product
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Product
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }

};