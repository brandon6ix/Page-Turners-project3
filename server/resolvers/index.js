const userResolvers = require('./userResolvers');
const bookResolvers = require('./bookResolvers');

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...bookResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...bookResolvers.Mutation,
  },
};

module.exports = resolvers;
