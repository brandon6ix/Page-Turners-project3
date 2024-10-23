const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../server/schema/typeDefs');
const resolvers = require('../server/resolvers');
const authMiddleware = require('./middleware/auth');

require('dotenv').config();

const app = express();

const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // Set up Apollo Server
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async ({ req }) => {
        const user = await authMiddleware(req);
        return { user };
      },
    });

    // Start the Apollo Server
    await server.start();

    // Apply middleware to the Express app
    server.applyMiddleware({ app, path: '/' });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

startServer();
