/* 
challenge =
type Product {
    name(required)
    price(required)
    discount
    priceWithDiscount (resolver)
}

query:
    highlightProduct
*/

const { ApolloServer, gql } = require('apollo-server');

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
        highlightProduct: Product
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
            return {
                id: 1,
                name: "Augusto",
                email: "teste@email.com",
                age: 10,
                real_salary: 123.456,
                vip: true
            }
        },
        highlightProduct() {
            return {
                name: "Book",
                price: 10.50,
                discount: 0.25,
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