const { users, profiles } = require('../data/db')

module.exports = {
    ola() {
        return 'Retorno da query Ola'
    },
    exactlyTime() {
        return new Date;
    },
    user() {
        return users[0];
    },
    users() {
        return users;
    },
    findUser(_, args) {
        const selectedUsers = users.filter(user => user.id === args.id);
        return selectedUsers ? selectedUsers[0] : null
    },
    highlightProduct() {
        return {
            name: "Book",
            price: 10.50,
            discount: 0.25,
        }
    },
    loteryNumbers() {
        let increasing = (a, b) => a - b;
        return Array(6).fill(0)
            .map(_ => parseInt(Math.random() * (60 + 1)))
            .sort(increasing);
    },
    profiles() {
        return profiles;
    },
    profile(_, { id }) {
        const selectedProfiles = profiles.filter(profile => profile.id === id);
        return selectedProfiles ? selectedProfiles[0] : null
    }
}