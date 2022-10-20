
exports.up = function(knex) {
  return knex.schema.createTable('User_Profile',
  (table)=>{
        table.increments();
        table.string('first_name')
        table.string('last_name')
        table.string('department');
        table.string('designation')
       table.integer('tenant_id').unsigned().references('id').inTable('Tenant_Profile').onDelete('cascade');
        table.string('image_url')
        table.string('city')
        table.string('country')
        table.string('bio')
        table.json('social_links')
        table.integer('employee_id',255)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('User_Profile') 
  
};
