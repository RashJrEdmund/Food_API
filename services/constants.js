// by target the path to which the env variables are stored
//this is to be able to use dotenv in this file.
require("dotenv").config({ path: `${__dirname}/../.env.local` });

const MONGO_DB_CONNECT_URL = process.env.MONGO_DB_CONNECT_URL

module.exports = { MONGO_DB_CONNECT_URL }
