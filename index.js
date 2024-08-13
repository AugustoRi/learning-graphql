const { ApolloServer, gql } = require('apollo-server');

const users = [
    {
        id: 1,
        name: "Augusto",
        email: "teste@email.com",
        age: 10,
        real_salary: 123.456,
        vip: true
    },
    {
        id: 2,
        name: "João",
        email: "teste2@email.com",
        age: 12,
        real_salary: 12.3456,
        vip: false
    },
    {
        id: 3,
        name: "Rafaela",
        email: "teste3@email.com",
        age: 14,
        real_salary: 1.23456,
        vip: false
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

    type User {
        # ! = required
        id: Int
        name: String!
        email: String!
        age: Int
        salary: Float
        vip: Boolean
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