const mongoose = require("mongoose");
const { MONGO_DB_CONNECT_URL } = require("../services/constants");

mongoose
  .connect(MONGO_DB_CONNECT_URL, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then(() => console.log("mongoose connected"))
  .catch((error) => console.log("\nerror:", error.message));

module.exports = mongoose
