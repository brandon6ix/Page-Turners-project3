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

  type Post {
    id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: String!
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

    addPost(title: String!, content: String!, author: String!): Post
    updatePost(id: ID!, title: String, content: String): Post
    deletePost(id: ID!): Post
  }
`;

module.exports = typeDefs;