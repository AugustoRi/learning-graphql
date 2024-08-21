const { users, nextId } = require('../data/db');

// if consult = query, if CRUD = mutation

module.exports = {
    createUser(_, { name, email, age }) {
        let newUser = {
            id: nextId(),
            name,
            email,
            age,
            profile_id: 1,
            status: 'ACTIVE'
        }
        users.push(newUser);
        return newUser;
    }
}