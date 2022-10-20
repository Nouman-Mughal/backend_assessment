
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('User_Profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('User_Profile').insert([
        {first_name: 'zohaib', last_name:'shahid'},
        {first_name: 'mohid', last_name:'shahzad'},
        {first_name: 'tahir',last_name:'shahid'}    //[postgres] can take care of id number.
      ]);
    });
};
