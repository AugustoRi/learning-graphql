const { users, nextId } = require('../data/db');

// if consult = query, if CRUD = mutation

module.exports = {
    // { name, email, age }
    createUser(_, args) {
        let isEmailExisting = users.some((user) => user.email === args.email);

        if (isEmailExisting) {
            throw new Error('Email already exists!');
        }

        let newUser = {
            id: nextId(),
            ...args,
            profile_id: 1,
            status: 'ACTIVE'
        }
        users.push(newUser);
        return newUser;
    },
    deleteUser(_, { id }) {
        let isUserExisting = users.some((user) => user.id === id);

        if (!isUserExisting) {
            throw new Error(`User with id ${id} doesn't exist! `);
        }

        let newUsers = users.filter((user) => user.id !== id);

        return newUsers;
    }
}