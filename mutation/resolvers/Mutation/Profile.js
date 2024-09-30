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
    },
    updateProfile(_, { filter, data }) {
        let profileIndex;

        if (filter.id) {
            profileIndex = profiles.findIndex((profile) => filter.id === profile.id);
        }

        if (filter.name) {
            profileIndex = profiles.findIndex((profile) => filter.name === profile.name);
        }

        if (profileIndex < 0) {
            throw new Error(`Profile doesn't exist!`);
        }

        let newProfilePayload = {
            ...profiles[profileIndex],
            ...data
        }

        profiles.splice(profileIndex, 1, newProfilePayload);
        return profiles[profileIndex];
    }
}