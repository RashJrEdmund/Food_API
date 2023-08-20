const { foodData } = require("../../data");
const { FoodSchema } = require("../../schemas");

class FoodService {
    static getAllFood = () => {
        // FoodSchema.
        return foodData
    }

    static getOneFood = (id) => {
        //
    }

    static createOneFood = async (reqBody) => {
        // FoodSchema

        try {
            // const foodInsert = foodData.map(food => ({ ...food, id: uuid(), author: { ...food.author, id: "d240d395-d5f1-4fb8-9ae2-c630b178d6cd" } }))

            const response = await FoodSchema.insertMany([...foodData])
            // const response = await FoodSchema.create(foodData[0])

            console.clear();
            console.log("response \n \n", response);
        } catch (err) {
            console.log({ FoodSchema, err })
        }

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