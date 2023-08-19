const FoodService = require("./food.service.js");

console.log({ FoodService })

class FoodController {
  async getAllFood(_, res) {
    try {
      const all_food = await FoodService.getAllFood();

      if (all_food.length <= 0) return res.sendStatus(404);

      return res.status(200).send(all_food);
    } catch (err) {
      res.status(401).send(err.toLocaleString())
    }
  }

  async getOneFood(req, res) {
    const food = await FoodService.getOneFood(req.params.id);

    if (food) return res.sendStatus(404);

    return res.status(200).send(food);
  }

  async creatFood(req, res) {
    const {
      id, // also plan to use uuid.v4() from the fron_end
      name,
      img, // an array string
      recipe, // an array string
      description,
      author
    } = req.body

    if (!(id && name && img.length >= 1 && recipe.length >= 1 && description && author.id && author.username)) {
      return res.status(406).send({ message: "Missing Food Info" });
    }

    FoodService.createOneFood(req.body)
      .then(({ statusCode, result }) => res.status(statusCode).send(result))
      .catch((err) => res.status(500).send(err.toLocaleString()));
  }

  async updateOneFood(req, res) {
    FoodService.updateFood(req.body, +req.params.id)
      .then((food_update) => res.status(202).send(food_update))
      .catch((err) => res.status(401).send(err.toLocaleString()));
  }

  async deleteFood(req, res) {
    FoodService.deleteFood(req.params.id)
      .then((statusCode) => res.sendStatus(statusCode))
      .catch((err) => res.status(500).send(err.toLocaleString()));
  }
}

module.exports = FoodController;
