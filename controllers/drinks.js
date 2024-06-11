const Drinks = require("../schemas/Drinks");

const getAllDrinks = async (request, response) => {
  try {
    const drinks = await Drinks.find();
    if (!drinks.length) {
      return response.status(200).json({ message: "No drink found!" });
    }
    response.status(200).json(food);
  } catch (error) {
    response.status(500).json(error);
  }
};

const getOneDrinks = async (request, response) => {
  try {
    const { id } = request.params;
    const drinks = await Drinks.findById(id);
    if (drinks) {
      return response.status(200).json(food);
    }
    response.status(404).json({ message: "Drinks not found!" });
  } catch (error) {
    response.status(500).json(error);
  }
};

const createDrinks = async (request, response) => {
  try {
    const { type, city, price } = request.body;
    const drinks = await Drinks.create({ type, city, price });
    response.status(201).json(drinks);
  } catch (error) {
    response.status(500).json(error);
  }
};

const updateDrinks = async (request, response) => {
  try {
    const { id } = request.params;
    const { type, price } = request.body;

    const drinks = await Drinks.findByIdAndUpdate(
      id,
      { type, city, price },
      { new: true }
    );

    if (!drinks) {
      return response.status(404).json({ message: "Drinks not found!" });
    }

    response
      .status(200)
      .json({ message: "Drinks updated successfully!", drinks });
  } catch (error) {
    response.status(500).json(error);
  }
};

const deleteDrinks = async (request, response) => {
  try {
    const { id } = request.params;
    const drinks = await Drinks.findByIdAndDelete(id);

    if (!drinks) {
      return response.status(404).json({ message: "Drinks not found!" });
    }

    response.status(200).json({ message: "Drinks deleted successfully!" });
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  getAllDrinks,
  getOneDrinks,
  createDrinks,
  updateDrinks,
  deleteDrinks,
};
