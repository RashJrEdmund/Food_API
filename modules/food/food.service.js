const { foodData } = require("../../data");
const { FoodSchema } = require("../../schemas");

console.log(uuid())

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

            console.clear()
            console.log(foodData.slice(-1), foodData.slice(-1)[0].author)
            const response = await FoodSchema.insertMany([...foodData])

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

FoodService.createOneFood()

module.exports = FoodService