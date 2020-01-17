const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    uniqu: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
    
  }
});

module.exports = Product = mongoose.model("products", ProductSchema);
