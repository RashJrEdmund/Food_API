const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then((conn) => console.log(`Database connected: ${conn.connection}`))
  .catch((error) => console.log(error))

console.log(mongoose.connection.readyState)

module.exports = mongoose
