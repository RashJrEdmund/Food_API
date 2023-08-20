const mongoose = require("mongoose");
const { MONGO_DB_CONNECT_URL } = require("../services/constants");
console.log("url \n", MONGO_DB_CONNECT_URL)

mongoose
  .connect(MONGO_DB_CONNECT_URL, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then((conn) => console.log(`Database connected: ${conn}`))
  .catch((error) => console.log("sahh \n\n", error))

console.log(mongoose.connection.readyState)

module.exports = mongoose
