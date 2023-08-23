const { FoodSchema } = require("../../schemas");
const { foodData } = require("../../data")

class FoodRepo {
    static getAllFood = () => FoodSchema.find({});

    static getOneFood = (_id) => FoodSchema.findById({ _id });

    static createMany = async (foodData) => {

        const res = await FoodSchema.insertMany([...foodData]);
        console.log(res)
    }

    static getAllByuser = (author_id) => FoodSchema.find({ author_id });

    static createOneFood = (food) => FoodSchema.create({ ...food });

    static updateFood = (_id, update) =>
        FoodSchema.updateOne({ _id }, { ...update })
            .then(() => FoodRepo.getOneFood(_id));

    static deleteFood = (_id) => FoodSchema.deleteOne({ _id });
}

// FoodRepo.createMany(foodData)

module.exports = FoodRepo;
