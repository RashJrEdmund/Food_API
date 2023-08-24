const { FoodSchema } = require("../../schemas");
// const { foodData } = require("../../data")

class FoodRepo {
    static getTotalDocs = () => FoodSchema.countDocuments();

    static getPageFood = ({ page, items_per_page }) =>
        FoodSchema.find()
            .skip((page - 1) * items_per_page)
            .limit(items_per_page);

    static getOneFood = (_id) => FoodSchema.findById(_id);

    // static createMany = async (foodData) => { // this will fill the data base with food data
    //     const res = await FoodSchema.insertMany([...foodData]);
    //     console.log(res)
    // }

    static getAllByuser = (author_id) => FoodSchema.find({ author_id });

    static createOneFood = (food) => FoodSchema.create({ ...food });

    static updateFood = (_id, update) =>
        FoodSchema.updateOne({ _id }, { ...update })
            .then(() => FoodRepo.getOneFood(_id));

    static deleteFood = (_id) => FoodSchema.deleteOne({ _id });
}

// FoodRepo.createMany(foodData)

module.exports = FoodRepo;
