const router = require("express").Router()

const { UserController } = require("../../modules");

const userController = new UserController();

router.get('/', userController.getAllUsers);

router.post('/', userController.createOneUser.bind(userController));

router.get('/:id', userController.getOneUser.bind(userController));

router.patch('/:id', userController.updateOneUser.bind(userController));

router.delete('/:id', userController.deleteUser.bind(userController));

module.exports = router
