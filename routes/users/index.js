const router = require("express").Router()

const UserController = require("../../modules/users/user.controller");
const userController = new UserController();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser.bind(userController));
router.post('/', userController.createOneUser.bind(userController));

module.exports = router
