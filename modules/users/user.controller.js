const UserService = require("./user.service.js");

class UserController {
    async getAllUsers(_, res) {
        try {
            const all_users = await UserService.getAllUsers();

            if (all_users.length <= 0) return res.sendStatus(404); // 404 Not found

            return res.status(200).send(all_users); // 200 ok
        } catch (error) {
            res.status(500).send(error.message || error.toLocaleString())
        }
    }

    async getOneUser(req, res) {
        try {
            const user = await UserService.getOneUser(req.params.id);

            if (!user) return res.sendStatus(404); // 404 user not found

            return res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error.message || error.toLocaleString())
        }
    }

    async createOneUser(req, res) {
        const { _id, username, email, password } = req.body

        if (!(_id && username && email && password)) {
            return res.status(406).send({ message: "Missing User Info", body: req.body });
        }

        UserService.createOneUser(req.body)
            .then(({ statusCode, result }) => res.status(statusCode).send(result))
            .catch((error) => res.status(500).send(error.message || error.toLocaleString()));
    }

    async updateOneUser(req, res) {
        if (!req.body) return res.sendStatus(417) // Expect­ation Failed

        UserService.updateUser(req.params.id, req.body)
            .then((user_update) => res.status(202).send(user_update))
            .catch((err) => res.status(401).send(err.toLocaleString()));
    }

    deleteUser(req, res) {
        UserService.deleteUser(req.params.id)
            .then(({ statusCode, message }) => res.status(statusCode).send(message))
            .catch((err) => res.status(500).send(err.toLocaleString()));
    }
}

module.exports = UserController;
