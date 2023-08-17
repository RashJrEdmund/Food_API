const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        id: { type: String, required: true }, // plan to use uuid.v4() from the front_end
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

const UserSchema = mongoose.model("users", userSchema);

module.exports = UserSchema;
