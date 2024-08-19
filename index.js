const { ApolloServer, gql } = require('apollo-server');

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
        profile_id: 1
    },
    {
        id: 2,
        name: "João",
        email: "teste2@email.com",
        age: 12,
        real_salary: 12.3456,
        vip: false,
        profile_id: 2
    },
    {
        id: 3,
        name: "Rafaela",
        email: "teste3@email.com",
        age: 14,
        real_salary: 1.23456,
        vip: false,
        profile_id: 2
    }
]

const typeDefs = gql`
    scalar Date

    type Product {
        name: String!
        price: Float!
        discount: Float
        priceWithDiscount: Float
    }

    type Profile {
        id: Int
        name: String
        permissions: [String]
    }

    type User {
        # ! = required
        id: Int
        name: String!
        email: String!
        age: Int
        salary: Float
        vip: Boolean
        profile: Profile
    }

    # Pontos de entrada da sua API!
    type Query {
        # [type] = arrays
        # [Int!]! = requirement return array and int type required.
        # query(): String => compilation error
        ola: String!
        exactlyTime: Date!
        user: User
        users: [User]
        findUser(id: Int): User
        highlightProduct: Product
        loteryNumbers: [Int!]!
        profiles: [Profile]
        profile(id: Int): Profile
    }
`

const resolvers = {
    Product: {
        priceWithDiscount(payload) {
            return payload.discount ? payload.price - (payload.price * payload.discount) : payload.price;
        }
    },
    User: {
        salary(payload) {
            return payload.real_salary;
        },
        profile(user) {
            const selectedProfiles = profiles
                .filter(profile => profile.id === user.profile_id);
            return selectedProfiles ? selectedProfiles[0] : null
        }
    },
    Query: {
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
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})