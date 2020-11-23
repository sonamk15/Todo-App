const express = require('express')
const router = express.Router();
const { user } = require('./validator')
const UserService = require('../controllers/user')
const userService = new UserService();

const {checkToken} = require('../auth/auth');

router.post('/users', user.create.body, async (req, res) => {
    return await userService.createNewUser(req, res)
})


router.post('/users/:id',checkToken, user.update.body, async (req, res) => {
    return await userService.updateUser(req, res)
})

router.delete('/users/:id', checkToken, user.delete.params, async (req, res) => {
    return await userService.deleteUser(req, res);
})



router.post('/login', user.login.body,  async (req, res) => {
    return await userService.logIn(req, res)
})

router.get('/users/:id', checkToken, user.get.params, (req, res) => {
    return userService.getUserById(req, res)
})

module.exports = {
    router: router
}