const FoodService = require("./food.service.js");

class FoodController {
  async getAllFood(req, res) {
    try {
      const page = req.query.page || 1;
      const items_per_page = req.query.items_per_page || 12;

      const page_food = await FoodService.getAllPageFood({ page, items_per_page });

      if (page_food.items <= 0) return res.sendStatus(404); // 404 Not found

      return res.status(200).send(page_food); // 200 ok
    } catch (error) {
      res.status(500).send(error.message || error.toLocaleString())
    }
  }

  async getOneFood(req, res) {
    try {
      const food = await FoodService.getOneFood(req.params.id);

      if (!food) return res.sendStatus(404); // 404 food not found

      return res.status(200).send(food);
    } catch (error) {
      res.status(500).send(error.message || error.toLocaleString())
    }
  }

  async getAllByuser(req, res) { // YO!!, THIS SERVICE IS NOT YET WØRKING
    try {
      const author_id = req.params.id;
      const author_foods = await FoodService.getAllByuser(author_id);

      if (!author_foods) return res.status(404).json({ message: "could not find any of this user's creations" })

      return res.status(200).send(author_foods);
    } catch (error) {
      res.status(500).send(error.message || error.toLocaleString());
    }
  }

  async creatFood(req, res) {
    const {
      _id, // also plan to use uuid.v4() from the fron_end
      name,
      img, // an array string
      recipe, // an array string
      description,
      author_id,
    } = req.body

    if (!(_id && name && img.length >= 1 && recipe.length >= 1 && description && author_id)) {
      return res.status(406).send({ message: "Missing Food Info", body: req.body });
    }

    FoodService.createOneFood(req.body)
      .then(({ statusCode, result }) => res.status(statusCode).send(result))
      .catch((error) => res.status(500).send(error.message || error.toLocaleString()));
  }

  async updateOneFood(req, res) {
    if (!req.body) return res.sendStatus(417) // Expect­ation Failed

    FoodService.updateFood(req.params.id, req.body)
      .then((food_update) => res.status(202).send(food_update))
      .catch((err) => res.status(401).send(err.toLocaleString()));
  }

  deleteFood(req, res) {
    FoodService.deleteFood(req.params.id)
      .then(({ statusCode, message }) => res.status(statusCode).send(message))
      .catch((err) => res.status(500).send(err.toLocaleString()));
  }
}

module.exports = FoodController;
