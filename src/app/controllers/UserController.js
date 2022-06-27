const User = require('../models/UserModel')
const { renderJson } = require('../../util/app')

class UserController {
    async create(req, res) {
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }
        console.log(User)
        const user = await User.create(data)
        res.json(renderJson({user}))
    }

    async read(req, res) {
        const { userData: user } = req
        res.json(renderJson({ user }))
    }

    async edit(req, res) {
        // const id = req.params.id
        // const user = await User.findById(id)
        // console.log(user)
        // user.firstName = req.body.firstName
        // await user.save()

        const { userData: user } = req

        await User.updateOne({ _id: user._id }, {$set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        } })
        const newUser = await User.findById(user._id)

        res.json(renderJson({ user: newUser } ))
    }

    async delete(req, res) {
        const { userData: user } = req
        await User.deleteOne({ _id: user._id })
        res.json(renderJson({}))
    }

    async index(req, res) {
        const users = await User.find({})
        res.json(renderJson({ users }))
    }
}

module.exports = UserController