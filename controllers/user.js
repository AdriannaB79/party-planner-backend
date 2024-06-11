const User = require("../schemas/User");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id);
    const id = user._id;
    const age = user.age;

    res.status(200).json({ email, token, id, age });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// sign up user
const signUpUser = async (req, res) => {
  console.log("THIS IS thE BODY: ", req.body);
  const { email, password, city, age, name } = req.body;
  try {
    const user = await User.signup(email, password, name, city, age);
    console.log("CREATED USER: ", user);
    //create token
    const token = createToken(user._id);
    const id = user._id;
    res.status(200).json({ email, token, id, age });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (request, response) => {
  try {
    const users = await User.find();
    if (!users.length) {
      return response.status(200).json({ message: "No users in Data Base" });
    }
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json(error);
  }
};

const getOneUser = async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.findById(id);
    if (user) {
      return response.status(200).json(user);
    }
    response.status(404).json({ message: "I did not find user" });
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  loginUser,
  signUpUser,
};
