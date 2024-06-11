const Food = require("../schemas/Food");
const { request, response } = require("express");

const getAllFood = async (request, response) => {
  try {
    const food = await Food.find();
    if (!food.length) {
      return response.status(200).json({ message: "No food found!" });
    }
    response.status(200).json(food);
  } catch (error) {
    response.status(500).json(error);
  }
};

const getOneFood = async (request, response) => {
  try {
    const { id } = request.params;
    const food = await Food.findById(id);
    if (food) {
      return response.status(200).json(food);
    }
    response.status(404).json({ message: "Food not found!" });
  } catch (error) {
    response.status(500).json(error);
  }
};

const createFood = async (request, response) => {
  try {
    const { type, price } = request.body;
    const food = await Food.create({ type, price });
    response.status(201).json(food);
  } catch (error) {
    response.status(500).json(error);
  }
};

const updateFood = async (request, response) => {
  try {
    const { id } = request.params;
    const { type, price } = request.body;

    const food = await Food.findByIdAndUpdate(
      id,
      { type, price },
      { new: true }
    );

    if (!food) {
      return response.status(404).json({ message: "Food not found!" });
    }

    response.status(200).json({ message: "Food updated successfully!", food });
  } catch (error) {
    response.status(500).json(error);
  }
};

const deleteFood = async (request, response) => {
  try {
    const { id } = request.params;
    const food = await Food.findByIdAndDelete(id);

    if (!food) {
      return response.status(404).json({ message: "Food not found!" });
    }

    response.status(200).json({ message: "Food deleted successfully!" });
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  getAllFood,
  getOneFood,
  createFood,
  updateFood,
  deleteFood,
};
