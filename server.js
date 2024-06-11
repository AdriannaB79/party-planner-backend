const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbinit");
const PORT = process.env.PORT || 8080;

connectDB();

// Necessary middleware
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/user");
const partyRoutes = require("./routes/party");
const decorationsRoutes = require("./routes/decorations");
const foodRoutes = require("./routes/food");
const drinksRoutes = require("./routes/drinks");

app.use("/api/users", userRoutes);
app.use("/api/parties", partyRoutes);
app.use("/api/decorations", decorationsRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/drinks", drinksRoutes);

app.get("/", (req, res) => {
  res.send("Express/JWT");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
