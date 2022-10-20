const db = require('./DatabaseConfig');
module.exports = {
    getAll(table) {
        return db(table);
    },
        
        insertUser(newUser) {
          
          return db
            .insert(newUser)
            .into('User_Profile')
            .returning("*")
            .then((rows) => {
              return rows[0];
            });
        },
        getById( id) {
          return db.from('User_Profile').select("*").where("id", id).first();
        },
        deleteUser(id) {
          return db("User_Profile").where({ id }).delete();
        },
        updateUser(id, userFields) {
          return db("").where({ id }).update(userFields);
        }
}

  
  
