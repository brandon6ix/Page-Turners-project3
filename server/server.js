// const express = require('express');
// // const mongoose = require('mongoose');
// const { ApolloServer } = require('apollo-server-express');
// const typeDefs = require('../server/schema/typeDefs');
// const resolvers = require('../server/resolvers');
// const authMiddleware = require('./middleware/auth');

// require('dotenv').config();

// const app = express();

// const startServer = async () => {
//   try {
//     // Connect to MongoDB
//     // await mongoose.connect(process.env.MONGODB_URI, {
//     //   useNewUrlParser: true,
//     //   useUnifiedTopology: true,
//     // });
//     // console.log('MongoDB connected');

//     // Set up Apollo Server
//     const server = new ApolloServer({
//       typeDefs,
//       resolvers,
//       context: async ({ req }) => {
//         const user = await authMiddleware(req);
//         return { user };
//       },
//     });

//     // Start the Apollo Server
//     await server.start();

//     // Apply middleware to the Express app
//     server.applyMiddleware({ app, path: '/' });

//     const PORT = process.env.PORT || 3001;
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
//     });
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// startServer();

const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./middleware/auth');

const  typeDefs  = require('./schema/typeDefs');
const { resolvers } = require('./resolvers');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
  startApolloServer();

