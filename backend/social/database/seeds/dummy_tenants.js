
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tenant_Profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tenant_Profile').insert([
        { tenant_name:'basit', city:'lahore'},
        { tenant_name:'ahmad', city:'lahore'},
        { tenant_name:'mazhar', city:'lahore'}
      ]);
    });
};
