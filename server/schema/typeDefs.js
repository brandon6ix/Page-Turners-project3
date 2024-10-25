const { gql } = require("apollo-server-express");

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

  type Order {
    id: ID!
    user: User!
    books: [Order!]!
    totalAmount: Float!
    orderDate: String!
    status: String!
  }

  type Query {
    books: [Book]

    book(id: ID!): Book
    externalBooks: [Book]
    orders: [Order!]!
    order(id: ID!): Order
    me: User
    reviews: [Review!]!
    review(id: ID!): Review
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      description: String!
      price: Float!
      stock: Int!
      image: String
    ): Book
    updateBook(
      id: ID!
      title: String
      author: String
      description: String
      price: Float
      stock: Int
      image: String
    ): Book
    deleteBook(id: ID!): Book

    addReview(
      bookId: ID!
      username: String!
      content: String!
      rating: Int!
    ): Review
    updateReview(id: ID!, content: String, rating: Int): Review
    deleteReview(id: ID!): Review

    createOrder(userId: ID!, books: [OrderInput!]!): Order!

    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
  }

  input OrderInput {
    book: ID! # ID of the book being ordered
    quantity: Int! # Quantity of the book
  }
`;

module.exports = typeDefs;
