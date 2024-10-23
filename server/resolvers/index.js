const userResolvers = require('./userResolvers');
const bookResolvers = require('./bookResolvers');
const reviewResolvers = require('./reviewResolvers');
const orderResolvers = require('./orderResolvers');

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...bookResolvers.Query,
    ...reviewResolvers.Query,
    ...orderResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...bookResolvers.Mutation,
    ...reviewResolvers.Mutation,
    ...bookResolvers.Mutation,
  }
};

module.exports = resolvers;
