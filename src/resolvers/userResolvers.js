const bcrypt = require('bcrypt');
const { User } = require('../models'); // Import the User model

const userResolvers = {
  Query: {
    // Fetch a user by ID
    user: async (_, { id }) => {
      try {
        return await User.findById(id);
      } catch (error) {
        throw new Error("Error fetching user");
      }
    },
  },

  Mutation: {
    // Register a new user
    addUser: async (_, { username, email, password }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        return await newUser.save();
      } catch (error) {
        throw new Error("Error adding user");
      }
    },

    // Update user profile
    updateUser: async (_, { id, username, email }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { username, email },
          { new: true }
        );
        return updatedUser;
      } catch (error) {
        throw new Error("Error updating user");
      }
    },
  },
};

module.exports = userResolvers;
