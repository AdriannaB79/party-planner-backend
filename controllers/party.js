const Party = require("../schemas/Party");

const getAllParties = async (request, response) => {
  console.log("Hallo from function!!! ", request.body);
  const { userId } = request.body;
  console.log("USER ID", userId);
  try {
    const parties = await Party.find({ user: userId });
    console.log(parties);
    if (!parties.length) {
      return response
        .status(200)
        .json({ message: "No parties in the database" });
    }
    response.status(200).json(parties);
  } catch (error) {
    response.status(500).json(error);
  }
};
// 6659aa5bbd681e755b2564fa
// 6659aa5bbd681e755b2564fa
const getOneParty = async (request, response) => {
  try {
    const { id } = request.params;
    const party = await Party.findById(id);
    if (party) {
      return response.status(200).json(party);
    }
    response.status(404).json({ message: "Party not found" });
  } catch (error) {
    response.status(500).json(error);
  }
};

const createParty = async (request, response) => {
  console.log(request);
  console.log("CREATING PARTY", request.body);
  try {
    const userId = request.body.user;
    const {
      city,
      location,
      numberOfPeople,
      partyType,
      foodType,
      drinksType,
      decorations,
      budget,
    } = request.body;
    const party = await Party.create({
      city,
      location,
      numberOfPeople,
      partyType,
      foodType,
      drinksType,
      decorations,
      budget,
      user: userId,
    });
    response.status(201).json(party);
  } catch (error) {
    response.status(500).json(error);
  }
};

const updateParty = async (request, response) => {
  try {
    const { id } = request.params;
    const {
      city,
      location,
      numberOfPeople,
      partyType,
      foodType,
      drinksType,
      decorations,
      budget,
    } = request.body;

    const party = await Party.findByIdAndUpdate(
      id,
      {
        city,
        location,
        numberOfPeople,
        partyType,
        foodType,
        drinksType,
        decorations,
        budget,
        user,
      },
      { new: true }
    );

    if (!party) {
      return response.status(404).json({ message: "Party not found" });
    }

    response
      .status(200)
      .json({ message: "Party updated successfully!", party });
  } catch (error) {
    response.status(500).json(error);
  }
};

const deleteParty = async (request, response) => {
  try {
    const { id } = request.params;
    const party = await Party.findByIdAndDelete(id);

    if (!party) {
      return response.status(404).json({ message: "Party not found" });
    }

    response.status(200).json({ message: "Party deleted successfully!" });
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  getAllParties,
  getOneParty,
  createParty,
  updateParty,
  deleteParty,
};
