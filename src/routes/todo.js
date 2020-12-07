const express = require('express')
const router = express.Router();
const { todo } = require('../validator')
const TodoService = require('../controllers/todo')
const todoService = new TodoService();

router.post('/', todo.create.body, async (req, res) => {
    return await todoService.createNewTodo(req, res)
})

module.exports =  router;