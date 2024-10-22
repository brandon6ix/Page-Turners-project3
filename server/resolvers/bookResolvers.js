const Book = require('../models/Book');
const axios = require('axios');

const resolvers = {
  Query: {
    books: async () => await Book.find(),
    book: async (_, { id }) => await Book.findById(id),

    externalBooks: async () => {
      try {
        const response = await axios.get('http://books.cloudfoundry.com/data/books/');
        return response.data.map((book) => ({
          id: book.id,
          title: book.title,
          author: book.author,
          description: book.description,
          price: book.price || 0.0,
          stock: book.stock || 0,
          image: book.image_url
        }));
      } catch (error) {
        console.error('Error fetching external books:', error);
        throw new Error('Unable to fetch books from external API');
      }
    }
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

