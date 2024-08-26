const { users, nextId } = require('../../data/db');

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
    },
    updateUser(_, { filter, data }) {
        let userIndex;

        if (filter.id) {
            userIndex = users.findIndex((user) => filter.id === user.id);
        }

        if (filter.email) {
            userIndex = users.findIndex((user) => filter.email === user.email);
        }

        if (userIndex < 0) {
            throw new Error(`User with id ${filter.id} doesn't exist!`);
        }

        let newUserPayload = {
            ...users[userIndex],
            ...data
        }

        users.splice(userIndex, 1, newUserPayload);
        return users[userIndex];
    }
}