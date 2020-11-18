const Model = require('./index');

class Todo extends Model {
  static get tableName() {
    return 'todo';
  }
  
  static get joiSchema() {
    return Joi.object({
      id: Joi.number().integer(),
      todo: Joi.string(),
      is_completed: Joi.boolean(),
      user_id: Joi.number().integer(),
      created_at: Joi.date().required(),
    });
  }

  async $beforeInsert() {
    const now = new Date();
    this.created_at = now;
  }
}

module.exports = Todo;