const userResolvers = require('./userResolvers');
const bookResolvers = require('./bookResolvers');
const reviewResolvers = require('./reviewResolvers');

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...bookResolvers.Query,
    ...reviewResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...bookResolvers.Mutation,
    ...reviewResolvers.Mutation,
  }
};

module.exports = resolvers;
