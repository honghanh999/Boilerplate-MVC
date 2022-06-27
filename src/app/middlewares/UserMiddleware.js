const User = require("../models/UserModel");
const {renderJson} = require("../../util/app");

class UserMiddleware {
    async findId (req, res, next) {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            res.status(404).json(renderJson({}, false, 404, 'not found'))
        } else {
            req.userData = user
            next()
        }
    }
}


module.exports = UserMiddleware