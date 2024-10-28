const { Book } = require('../models'); // Import the Book model

const bookResolvers = {
  Query: {
    // Fetch all books
    books: async () => {
      try {
        return await Book.find();
      } catch (error) {
        throw new Error("Error fetching books");
      }
    },

    // Fetch a single book by ID
    book: async (_, { id }) => {
      try {
        return await Book.findById(id);
      } catch (error) {
        throw new Error("Error fetching book");
      }
    },
  },

  Mutation: {
    // Add a new book to the catalog
    addBook: async (_, { title, author, genre }) => {
      try {
        const newBook = new Book({ title, author, genre });
        return await newBook.save();
      } catch (error) {
        throw new Error("Error adding book");
      }
    },

    // Add a review to a book
    addReview: async (_, { bookId, userId, rating, comment }) => {
      try {
        const book = await Book.findById(bookId);
        if (!book) {
          throw new Error("Book not found");
        }

        const review = { userId, rating, comment };
        book.reviews.push(review);

        // Update average rating for the book
        book.rating =
          book.reviews.reduce((sum, rev) => sum + rev.rating, 0) /
          book.reviews.length;

        await book.save();
        return book;
      } catch (error) {
        throw new Error("Error adding review");
      }
    },

    // Delete a book by ID
    deleteBook: async (_, { id }) => {
      try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
          throw new Error("Book not found");
        }
        return deletedBook;
      } catch (error) {
        throw new Error("Error deleting book");
      }
    },
  },
};

module.exports = bookResolvers;
