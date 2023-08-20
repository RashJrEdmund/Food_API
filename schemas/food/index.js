const mongoose = require("../../db");

const Schema = mongoose.Schema;

const foodSchema = new Schema(
    {
        _id: { type: String, required: true }, // also plan to use uuid.v4() from the front_end and overwrite the _id property mongo
        name: { type: String, required: true },
        img: { type: [String] },
        imgIndx: { type: Number || String },
        recipe: { type: [String], required: true },
        description: String,
        fav: Boolean,
        author: {
            id: { type: String, required: true },
            username: { type: String, required: true },
            img: String,
            media: {
                name: String,
                link: String
            }
        }
    },
    { versionKey: false }
);

const FoodSchema = mongoose.model("foods", foodSchema);

module.exports = FoodSchema;
