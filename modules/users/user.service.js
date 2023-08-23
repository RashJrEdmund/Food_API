class UserService {
    static getAllUsers = () => userData;

    static getOneUser = (id) => userData.find(user => user.id === id);

    static registerUser = async (reqBody) => {
        const newUser = {
            id: reqBody.id,
            username: reqBody.username,
            password: reqBody.password,
            email: reqBody.email,
            img: reqBody.img,
            phone: reqBody.phone,
            password: reqBody.password,
            is_admin: reqBody.is_admin,
            media: {
                name: reqBody.media.name,
                link: reqBody.media.link,
            }
        }

        // const result = [...userData, newUser];
        // const statusCode = 200;

        // return { statusCode, result }
    }
}

// UserService.registerUser()

module.exports = UserService
