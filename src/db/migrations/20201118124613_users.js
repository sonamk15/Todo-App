exports.up = async(knex) =>  {

    await knex.schema.createTable('users', t => {
        t.increments('id').primary() 
        t.string('f_name').notNullable()
        t.string('l_name').notNullable()
        t.string('username').notNullable()
        t.string('email').notNullable().unique()
        t.datetime('created_at').notNullable()

    })
    await knex.schema.createTable('todo', t =>{
        t.increments('id').primary();
        t.string('todo').notNullable()
        t.boolean('is_completed').notNullable()
        t.integer('user_id').unsigned().references('id').inTable('users').notNullable();
        t.datetime('created_at').notNullable()


    })
    console.log("Table Created...")
  };
  
  exports.down = async(knex) => {
    return  await knex.schema.dropTable('users').dropTable('todo')
    
    
  };