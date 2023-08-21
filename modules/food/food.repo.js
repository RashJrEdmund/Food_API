const { foodData } = require("../../data");
const { FoodSchema } = require("../../schemas");

class FoodRepo {
    static getAllFood = () => FoodSchema.find({})

    static getOneFood = (_id) => FoodSchema.find({}).where({ _id })

    static createOneFood = (food) => FoodSchema.create(food)

    static updateFood = (update, id) => FoodSchema.updateOne();

    static deleteFood = (id) => {
        //
    }
}

// FoodRepo.createOneFood()

module.exports = FoodRepo