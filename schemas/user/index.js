const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        id: { type: String, autoIncrement: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        img: String,
        phone: String,
        media: {
            name: String,
            link: String,
        }
    }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;