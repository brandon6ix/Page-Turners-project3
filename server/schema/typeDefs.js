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

  type Review {
    id: ID!
    bookId: ID!
    username: String!
    content: String!
    rating: Int!
    createdAt: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    token: String
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

    addReview(bookId: ID!, username: String!, content: String!, rating: Int!): Review
    updateReview(id: ID!, content: String, rating: Int): Review
    deleteReview(id: ID!): Review
    
    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User

  }
`;

module.exports = typeDefs;