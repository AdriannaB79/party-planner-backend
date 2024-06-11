const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DecorationsSchema = new Schema({
  type: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Decorations", DecorationsSchema);
