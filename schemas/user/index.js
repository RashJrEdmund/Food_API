const mongoose = require("../../db");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        _id: { type: String, required: true }, // plan to use uuid.v4() from the front_end and overwrite the _id property mongo
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        img: String,
        phone: String,
        id_admin: { type: Boolean, default: false },
        media: {
            name: String,
            link: String,
        }
    },
    {
        timestamps: true,
    }
);

const UserSchema = mongoose.model("users", userSchema);

module.exports = UserSchema;
