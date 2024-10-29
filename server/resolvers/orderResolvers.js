const Order = require('../models/Order');
const User = require('../models/User');

const orderResolvers = {
  Query: {
    orders: async (_, __, { user }) => {
      // Ensure the user is authenticated
      if (!user) {
        throw new Error('Not authenticated');
      }
      // Fetch orders for the authenticated user
      return await Order.find({ user: user.id }).populate('books.book');
    },
    order: async (_, { id }, { user }) => {
      // Ensure the user is authenticated
      if (!user) {
        throw new Error('Not authenticated');
      }
      // Fetch a specific order
      return await Order.findById(id).populate('books.book');
    }
  },

  Mutation: {
    createOrder: async (_, { userId, books }, { user }) => {
      // Ensure the user is authenticated
      if (!user) {
        throw new Error('Not authenticated');
      }

      const order = new Order({
        user: userId,
        books,
        totalAmount: books.reduce((total, book) => total + book.price * book.quantity, 0),
        orderDate: new Date().toISOString(),
        status: 'Pending'
      });

      return await order.save();
    },

    updateOrder: async (_, { id, status }, { user }) => {
      // Ensure the user is authenticated
      if (!user) {
        throw new Error('Not authenticated');
      }

      // Update the order status
      return await Order.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      ).populate('books.book');
    },

    deleteOrder: async (_, { id }, { user }) => {
      // Ensure the user is authenticated
      if (!user) {
        throw new Error('Not authenticated');
      }

      // Delete the order
      return await Order.findByIdAndRemove(id);
    }
  }
};

module.exports = orderResolvers;
