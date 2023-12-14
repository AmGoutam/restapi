const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  featured: {
    type: Boolean,
    require: true,
  },
});


const Product = new model("product",productSchema);

module.exports = Product;