const FoodRepo = require("../food/food.repo");
const UserRepo = require("./user.repo");

class UserService {
    static getAllUsers = () => UserRepo.getAllUsers();

    static getOneUser = (_id) => UserRepo.getOneUser(_id);

    static registerUser = async (reqBody) => {
        try {
            const newUser = {
                _id: reqBody._id || reqBody.id, // plan to use uuid.v4() from the fron_end
                username: reqBody.username,
                password: reqBody.password,
                email: reqBody.email,
                img: reqBody.img,
                phone: reqBody.phone,
                password: reqBody.password,
                is_admin: reqBody.is_admin,
                media: {
                    name: reqBody.media.name ?? null,
                    link: reqBody.media.link ?? null,
                }
            }

            const response = await UserRepo.createOneUser(newUser);

            return { statusCode: 200, result: response };

        } catch (error) {
            throw new Error(err.message);
        }
    }

    static updateUser = (_id, reqBody) => {
        try {
            const update = {};

            if (reqBody.name) update.name = reqBody.name;
            // complete the rest;

            return UserRepo.updateUser(_id, update);
        } catch {
            throw new Error("COULD NOT UPDATE FOOD");
        }
    }

    static deleteUser = async (_id) => {
        const user = await UserRepo.getOneUser(_id);

        if (!user || !user._id) return { statusCode: 404, message: `ID: ${id} NOT_FOUND` };

        await FoodRepo.deleteFood(_id);

        return { statusCode: 200, message: `SUCCESSFULLY DELETED ${food.name}, ID: ${id}` }
    }
}

module.exports = UserService;
