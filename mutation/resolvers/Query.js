const { users, profiles } = require('../data/db')

module.exports = {
    users() {
        return users;
    },
    user(_, args) {
        const selectedUsers = users.filter(user => user.id === args.id);
        return selectedUsers ? selectedUsers[0] : null
    },
    profiles() {
        return profiles;
    },
    profile(_, { id }) {
        const selectedProfiles = profiles.filter(profile => profile.id === id);
        return selectedProfiles ? selectedProfiles[0] : null
    }
}