const router = require("express").Router()

const { FoodController } = require("../../modules");

const foodController = new FoodController();

router.get('/', foodController.getAllFood.bind(foodController));
router.post('/', foodController.creatFood.bind(foodController));
router.get('/:id', foodController.getOneFood.bind(foodController));
router.patch("/:id", foodController.updateOneFood.bind(foodController));
router.delete("/:id", foodController.deleteFood.bind(foodController))

module.exports = router
