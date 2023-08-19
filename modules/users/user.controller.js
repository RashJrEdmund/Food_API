const UserService = require("./user.service");

class UserController {
    async getAllUsers(_, res) {
        const allUsers = await UserService.getAllUsers();

        if (allUsers.length <= 0) return res.sendStatus(404);

        res.status(200).send(allUsers);
    }

    async createOneUser(req, res) {
        const { username, password, email } = req.body;

        if (!(username && password && email)) {
            return res.status(406).send({ message: "Missing User Info" });
        }

        UserService
            .registerUser(req.body)
            .then(({ statusCode, result }) => res.status(statusCode).send(result))
            .catch((err) => res.status(500).send(err.toLocaleString()));
    }

    async getOneUser(req, res) {
        console.log(req.params.id)
        const user = await UserService.getOneUser(req.params.id);

        if (!user) return res.sendStatus(404);

        res.status(200).send(user);
    }

    async updateOne(req, res) {
        //
    }

    async deleteOne(req, res) {
        //
    }

    // patchOneUser(req, res) {
    //     this.userService
    //         .editOneUser(req.body, +req.params.id)
    //         .then((updatedUser) => res.status(202).send(updatedUser))
    //         .catch((err) => res.status(401).send(err.toLocaleString()));
    // }

    // deleteOneUser(req, res) {
    //     this.userService
    //         .deleteOneUser(+req.params.id)
    //         .then((statusCode) => res.sendStatus(statusCode))
    //         .catch((err) => res.status(500).send(err.toLocaleString()));
    // }
}

module.exports = UserController;