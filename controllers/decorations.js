const Decorations = require("../schemas/Decorations");
const { request, response } = require("express");

const getAllDecorations = async (request, response) => {
  try {
    const decorations = await Decorations.find();
    if (!decorations.length) {
      return response.status(200).json({ message: "No decorations found!" });
    }
    response.status(200).json(decorations);
  } catch (error) {
    response.status(500).json(error);
  }
};

const getOneDecoration = async (request, response) => {
  try {
    const { id } = request.params;
    const decoration = await Decorations.findById(id);
    if (decoration) {
      return response.status(200).json(decoration);
    }
    response.status(404).json({ message: "Decoration not found!" });
  } catch (error) {
    response.status(500).json(error);
  }
};

const createDecoration = async (request, response) => {
  try {
    const { type, price, city } = request.body;
    const decoration = await Decorations.create({ type, price, city });
    response.status(201).json(decoration);
  } catch (error) {
    response.status(500).json(error);
  }
};

const updateDecoration = async (request, response) => {
  try {
    const { id } = request.params;
    const { type, price, city } = request.body;

    const decoration = await Decorations.findByIdAndUpdate(
      id,
      { type, price, city },
      { new: true }
    );

    if (!decoration) {
      return response.status(404).json({ message: "Decoration not found!" });
    }

    response
      .status(200)
      .json({ message: "Decoration updated successfully!", decoration });
  } catch (error) {
    response.status(500).json(error);
  }
};

const deleteDecoration = async (request, response) => {
  try {
    const { id } = request.params;
    const decoration = await Decorations.findByIdAndDelete(id);

    if (!decoration) {
      return response.status(404).json({ message: "Decoration not found!" });
    }

    response.status(200).json({ message: "Decoration deleted successfully!" });
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  getAllDecorations,
  getOneDecoration,
  createDecoration,
  updateDecoration,
  deleteDecoration,
};
