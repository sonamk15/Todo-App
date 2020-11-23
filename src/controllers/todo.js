const Todo = require('../models/todo');

class TodoService {
  constructor() {

  }
  
  async createNewTodo(req, res) {
    const todoDetails = req.body;
    const todo = await Todo.query().insert(todoDetails);
    return res.send(todo);
  }

  async updateTodo(req, res){
    var update_todo = {
      todo:req.body.todo,
      is_completed: req.body.is_completed,
    }
    await Todo.query().where('user_id',req.body.user_id).update(update_todo)

    Todo.query().where('user_id',req.body.user_id).then((data)=>{
      res.send(data);
    })
  
  }


  async deleteTodo(req, res){
 
    await Todo.query().where('id',req.body.id).delete()
      console.log(err," deleted");

      return res.send({err:"del successfully"});


    

  
  }




  async getTodo(req, res){
     Todo.query().then((data)=>{
       res.send(data);
     })
  }

  
}

module.exports = TodoService
