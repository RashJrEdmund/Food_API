const mongoose = require("../../db");

const Schema = mongoose.Schema;

const foodSchema = new Schema(
    {
        _id: { type: String, required: true }, // also plan to use uuid.v4() from the front_end and overwrite the _id property mongo
        name: { type: String, required: true },
        img: { type: [String] },
        imgIndx: { type: Number || String, default: 0 },
        recipe: { type: [String], required: true },
        description: String,
        fav: { type: Boolean, default: false },
        author_id: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const FoodSchema = mongoose.model("foods", foodSchema);

module.exports = FoodSchema;
