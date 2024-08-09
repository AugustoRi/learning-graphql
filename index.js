const { ApolloServer, gql } = require('apollo-server');

/* 
    challenge: create query exactlyTime
    in this query, convert newDate instance to string value, and return.
*/

const typeDefs = gql`
    # Pontos de entrada da sua API!
    type Query {
        ola: String
        exactlyTime: String
    }
`

const resolvers = {
    Query: {
        ola() {
            return 'Retorno da query Ola'
        },
        exactlyTime() {
            return new Date().toString();
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