const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema(
    {
        id: { type: String, required: true },
        name: { type: String, required: true },
        img: { type: [String] },
        imgIndx: 0,
        recipe: { type: [String], required: true },
        description: String,
        fav: Boolean,
        author: {
            id: { type: String, required: true },
            name: { type: String, required: true },
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
