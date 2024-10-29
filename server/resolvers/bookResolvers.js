const Book = require('../models/Book');

const resolvers = {
  Query: {
    // Query to get all books
    books: async () => {
      try {
        const allBooks = await Book.find();
        console.log('Books retrieved from the database:', allBooks); // Log the books retrieved from the database
        // Map _id to id for each book object
        return allBooks.map(book => ({
          id: book._id, // Map _id to id
          title: book.title,
          author: book.author,
          description: book.description,
          price: book.price,
          stock: book.stock,
          image: book.image,
          
        }));
      } catch (error) {
        console.error('Error retrieving books:', error);
        return []; // Return an empty array if there was an error
      }
    },
    
    // Query to get a specific book by its ID
    book: async (_, { id }) => {
      try {
        const book = await Book.findById(id);
        if (!book) {
          throw new Error('Book not found');
        }
        return {
          id: book._id, // Map _id to id
          title: book.title,
          author: book.author,
          description: book.description,
          price: book.price,
          stock: book.stock,
          image: book.image,
          
        };
      } catch (error) {
        console.error('Error retrieving book:', error);
        throw new Error('Failed to retrieve book');
      }
    },
  },

  Mutation: {
    // Mutation to add a new book
    addBook: async (_, { title, author, description, price, stock, image }) => {
      try {
        const newBook = new Book({ title, author, description, price, stock, image });
        const savedBook = await newBook.save();
        console.log('New book added:', savedBook);
        return {
          id: savedBook._id, // Map _id to id
          title: savedBook.title,
          author: savedBook.author,
          description: savedBook.description,
          price: savedBook.price,
          stock: savedBook.stock,
          image: savedBook.image,
          
        };
      } catch (error) {
        console.error('Error adding book:', error);
        throw new Error('Failed to add book');
      }
    },

    // Mutation to update a book by its ID
    updateBook: async (_, { id, title, author, description, price, stock, image }) => {
      try {
        const updatedBook = await Book.findByIdAndUpdate(
          id,
          { title, author, description, price, stock, image },
          { new: true }
        );
        if (!updatedBook) {
          throw new Error('Book not found');
        }
        console.log('Book updated:', updatedBook);
        return {
          id: updatedBook._id, // Map _id to id
          title: updatedBook.title,
          author: updatedBook.author,
          description: updatedBook.description,
          price: updatedBook.price,
          stock: updatedBook.stock,
          image: updatedBook.image,
          
        };
      } catch (error) {
        console.error('Error updating book:', error);
        throw new Error('Failed to update book');
      }
    },

    // Mutation to delete a book by its ID
    deleteBook: async (_, { id }) => {
      try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
          throw new Error('Book not found');
        }
        console.log('Book deleted:', deletedBook);
        return {
          id: deletedBook._id, // Map _id to id
          title: deletedBook.title,
          author: deletedBook.author,
          description: deletedBook.description,
          price: deletedBook.price,
          stock: deletedBook.stock,
          image: deletedBook.image,
          
        };
      } catch (error) {
        console.error('Error deleting book:', error);
        throw new Error('Failed to delete book');
      }
    },
  },
};

module.exports = resolvers;
