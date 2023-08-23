const FoodRepo = require("./food.repo");

class FoodService {
    static getAllFood = () => FoodRepo.getAllFood();

    static getOneFood = (_id) => FoodRepo.getOneFood(_id);

    static getAllByuser = (author_id) => FoodRepo.getAllByuser(author_id);

    static createOneFood = async (reqBody) => {
        try {
            const food = {
                _id: reqBody._id || reqBody.id, // also plan to use uuid.v4() from the fron_end
                name: reqBody.name,
                img: reqBody.img, // an array of image links
                imgIndx: 0,
                recipe: reqBody.recipe, // an array of steps
                description: reqBody.description,
                fav: reqBody.fav,
                author_id: reqBody.author_id,
                author_name: reqBody.author_name
            }

            const response = await FoodRepo.createOneFood(food);

            return { statusCode: 200, result: response };
        } catch (err) {
            throw new Error(err.message)
        }
    }

    static updateFood = (_id, reqBody) => {
        try {
            const update = {}
            if (reqBody.name) update.name = reqBody.name;
            if (reqBody.img) update.img = reqBody.img;
            if (reqBody.recipe) update.recipe = reqBody.recipe;
            if (reqBody.description) update.description = reqBody.description;
            if (reqBody.fav !== undefined) update.fav = reqBody.fav; // since reqBody.fav could be fasle

            return FoodRepo.updateFood(_id, update);
        } catch {
            throw new Error("COULD NOT UPDATE FOOD");
        }
    }

    static deleteFood = async (id) => {
        const food = await FoodRepo.getOneFood(id);

        if (!food || !food._id) return { statusCode: 404, message: `ID: ${id} NOT_FOUND` }

        const res = await FoodRepo.deleteFood(id)

        console.log(res)

        return { statusCode: 200, message: `SUCCESSFULLY DELETED ${food.name}, ID: ${id}` }
    }
}

module.exports = FoodService