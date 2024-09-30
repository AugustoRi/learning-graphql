const { nextId, profiles } = require('../../data/db');

module.exports = {
    createProfile(_, { data }) {
        let isRoleExisting = profiles.some((profile) => profile.name.toLowerCase() === data.name.toLowerCase());

        if (isRoleExisting) {
            throw new Error("Profile Role already exists!");
        }

        let newProfile = {
            id: nextId(),
            ...data,
        }
        profiles.push(newProfile);
        return newProfile;
    },
    deleteProfile(_, { filter }) {
        let isRoleExisting = profiles.some((profile) => profile.id === filter.id);

        if (!isRoleExisting) {
            throw new Error(`Profile with id ${filter.id} doesn't exist!`);
        }

        let newProfiles = profiles.filter((profile) => profile.id !== filter.id);

        return newProfiles;
    }
}