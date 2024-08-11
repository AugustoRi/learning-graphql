const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date

    type User {
        # ! = required
        id: ID
        name: String!
        email: String!
        age: Int
        salary: Float
        vip: Boolean
    }

    # Pontos de entrada da sua API!
    type Query {
        ola: String!
        exactlyTime: Date!
        user: User
    }
`

const resolvers = {
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
            return {
                id: 1,
                name: "Augusto",
                email: "teste@email.com",
                age: 10,
                real_salary: 123.456,
                vip: true
            }
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