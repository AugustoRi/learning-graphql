const { profiles } = require('../data/db')

module.exports = {
    salary(payload) {
        return payload.real_salary;
    },
    profile(user) {
        const selectedProfiles = profiles
            .filter(profile => profile.id === user.profile_id);
        return selectedProfiles ? selectedProfiles[0] : null
    }
}