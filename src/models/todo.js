const { Model } = require('objection');
const knex = require('../../knex')

Model.knex(knex)

class Todo extends Model {
  static get tableName() {
    return 'todo';
  }

}

module.exports = Todo;