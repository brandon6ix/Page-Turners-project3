const mongoose = require('mongoose');

// Define the schema for an order
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  books: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book', // Reference to the Book model
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1, // Minimum quantity of 1
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now, // Default to current date and time
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Cancelled'],
    default: 'Pending', // Default status
  },
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
