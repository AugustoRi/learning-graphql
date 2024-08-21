const PROFILES_PERMISSIONS = {
    NONE: [], ALL: ["CREATE", "READ", "UPDATE", "DELETE"]
}

const profiles = [
    {
        id: 1,
        name: 'Administrator',
        permissions: PROFILES_PERMISSIONS.ALL
    },
    {
        id: 2,
        name: 'Default',
        permissions: PROFILES_PERMISSIONS.NONE
    },
]

const users = [
    {
        id: 1,
        name: "Augusto",
        email: "teste@email.com",
        age: 10,
        real_salary: 123.456,
        vip: true,
        profile_id: 1,
        status: 'ACTIVE'
    },
    {
        id: 2,
        name: "João",
        email: "teste2@email.com",
        age: 12,
        real_salary: 12.3456,
        vip: false,
        profile_id: 2,
        status: 'INACTIVE'
    },
    {
        id: 3,
        name: "Rafaela",
        email: "teste3@email.com",
        age: 14,
        real_salary: 1.23456,
        vip: false,
        profile_id: 2,
        status: 'BLOCKED'
    }
]

module.exports = { users, profiles }