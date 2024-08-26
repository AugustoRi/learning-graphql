const { users, nextId } = require('../data/db');

// if consult = query, if CRUD = mutation

module.exports = {
    // { name, email, age }
    createUser(_, { data }) {
        let isEmailExisting = users.some((user) => user.email === data.email);

        if (isEmailExisting) {
            throw new Error('Email already exists!');
        }

        let newUser = {
            id: nextId(),
            ...data,
            profile_id: 1,
            status: 'ACTIVE'
        }
        users.push(newUser);
        return newUser;
    },
    deleteUser(_, { filter }) {
        let isUserExisting = users.some((user) => user.id === filter.id);

        if (!isUserExisting) {
            throw new Error(`User with id ${filter.id} doesn't exist!`);
        }

        let newUsers = users.filter((user) => user.id !== filter.id);

        return newUsers;
    }
}