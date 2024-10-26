const Book = require('../models/Book');

const resolvers = {
  Query: {
    books: async () => await Book.find(),
    book: async (_, { id }) => await Book.findById(id),
  },

  Mutation: {
    addBook: async (_, { title, author, description, price, stock, image }) => {
      const newBook = new Book({ title, author, description, price, stock, image });
      return await newBook.save();
    },
    updateBook: async (_, { id, title, author, description, price, stock, image }) => {
      return await Book.findByIdAndUpdate(id, { title, author, description, price, stock, image }, { new: true });
    },
    deleteBook: async (_, { id }) => {
      return await Book.findByIdAndDelete(id);
    }
  }
};

module.exports = resolvers;
