const { FoodSchema } = require("../../schemas")

export class FoodService {
    static getAllFood = () => {
        // FoodSchema.
    }

    static getOneFood = (id) => {
        //
    }

    static createOneFood = (reqBody) => {
        // FoodSchema

        const food = {
            id: reqBody.id, // also plan to use uuid.v4() from the fron_end
            name: reqBody.name,
            img: reqBody.img,
            imgIndx: 0,
            recipe: reqBody.recipe,
            description: reqBody.description,
            fav: reqBody.fav ?? false,
            author: {
                id: reqBody.author.id,
                username: reqBody.author.username,
                img: reqBody.author.img,
                media: {
                    name: reqBody.author.media.name,
                    link: reqBody.author.media.link
                }
            }
        }
    }

    static updateFood = (update, id) => {
        //
    }

    static deleteFood = (id) => {
        //
    }
}