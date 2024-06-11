const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartySchema = new Schema({
  city: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  numberOfPeople: {
    type: Number,
    required: true,
  },
  partyType: {
    type: String,
    required: true,
  },
  foodType: [
    {
      type: String,
      required: true,
    },
  ],
  drinksType: {
    type: String,
    required: true,
  },
  decorations: [
    {
      type: String,
    },
  ],
  budget: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Party", PartySchema);
