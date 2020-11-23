const express = require('express')
const router = express.Router();
const { todo } = require('./validator')
const TodoService = require('../controllers/todo')
const todoService = new TodoService();

router.post('/todo', todo.create.body, async (req, res) => {
    return await todoService.createNewTodo(req, res)
})


router.get('/todo',  async (req, res) => {
    return await todoService.getTodo(req, res)
})

router.put('/todo',  async (req, res) => {
    return await todoService.updateTodo(req, res)
})

router.delete('/todo/:id',  async (req, res) => {
    return await todoService.deleteTodo(req, res)
})

module.exports = {
    router: router
}