const Todo = require('../models/todo');

class TodoService {
  constructor() {

  }
  
  async createNewTodo(req, res) {
    const todoDetails = req.body;
    const todo = await Todo.query().insert(todoDetails);
    return res.send(todo);
  }
}

module.exports = TodoService
