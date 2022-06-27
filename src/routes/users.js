const express = require('express')
const router = express.Router()
const UserController = require('../app/controllers/UserController')
const userController = new UserController
const UserMiddleware = require('../app/middlewares/UserMiddleware')
const userMiddleware = new UserMiddleware

router.post('/',  userController.create)
router.get('/:id', userMiddleware.findId, userController.read)
router.put('/:id', userMiddleware.findId, userController.edit)
router.delete('/:id', userMiddleware.findId, userController.delete)
router.get('/', userController.index)

module.exports = router
