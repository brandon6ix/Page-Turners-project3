const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    description: String!
    price: Float!
    stock: Int!
    image: String
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    externalBooks: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, description: String!, price: Float!, stock: Int!, image: String): Book
    updateBook(id: ID!, title: String, author: String, description: String, price: Float, stock: Int, image: String): Book
    deleteBook(id: ID!): Book
  }
`;

module.exports = typeDefs;