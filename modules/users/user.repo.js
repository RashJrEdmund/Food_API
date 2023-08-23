const { UserSchema } = require("../../schemas");

class UserRepo {
    static getAllUsers = () => UserSchema.find({});

    static getOneUser = (_id) => UserSchema.findById(_id);

    static createOneUser = (user) => UserSchema.create({ ...user });

    static updateUser = (_id, update) =>
        UserSchema.updateOne({ _id }, { ...update })
            .then(() => UserRepo.getOneUser(_id));

    static deleteUser = (_id) => UserSchema.deleteOne({ _id });
}

module.exports = UserRepo
