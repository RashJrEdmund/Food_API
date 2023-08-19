const { foodData } = require("../../data");
const { FoodSchema } = require("../../schemas");
const { v4: uuid } = require("uuid")

console.log(uuid())

class FoodService {
    static getAllFood = () => {
        // FoodSchema.

        return [{ name: "rice" }]
    }

    static getOneFood = (id) => {
        //
    }

    static createOneFood = async (reqBody) => {
        // FoodSchema

        const foodInsert = foodData.map(food => ({ ...food, id: uuid() }))

        const response = FoodSchema.insertMany(...foodInsert)

        console.clear();
        console.log("response \n \n", response);

        // const food = {
        //     id: reqBody.id, // also plan to use uuid.v4() from the fron_end
        //     name: reqBody.name,
        //     img: reqBody.img,
        //     imgIndx: 0,
        //     recipe: reqBody.recipe,
        //     description: reqBody.description,
        //     fav: reqBody.fav ?? false,
        //     author: {
        //         id: reqBody.author.id,
        //         username: reqBody.author.username,
        //         img: reqBody.author.img,
        //         media: {
        //             name: reqBody.author.media.name,
        //             link: reqBody.author.media.link
        //         }
        //     }
        // }
    }

    static updateFood = (update, id) => {
        //
    }

    static deleteFood = (id) => {
        //
    }
}

// FoodService.createOneFood()

module.exports = FoodService