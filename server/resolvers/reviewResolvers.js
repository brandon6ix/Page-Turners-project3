const Review = require('../models/Review');

const reviewResolvers = {
  Query: {
    // Fetch all reviews for a specific book
    reviews: async (_, { bookId }) => {
      return await Review.find({ bookId });
    },
    // Fetch a specific review by ID
    review: async (_, { id }) => {
      return await Review.findById(id);
    }
  },
  Mutation: {
    // Add a new review
    addReview: async (_, { bookId, username, content, rating }) => {
      const review = new Review({ bookId, username, content, rating });
      await review.save();
      return review;
    },
    // Update an existing review
    updateReview: async (_, { id, content, rating }) => {
      return await Review.findByIdAndUpdate(
        id,
        { content, rating },
        { new: true }
      );
    },
    // Delete a review
    deleteReview: async (_, { id }) => {
      return await Review.findByIdAndRemove(id);
    }
  }
};

module.exports = reviewResolvers;