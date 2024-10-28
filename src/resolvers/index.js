const bookResolvers = require('./bookResolvers');
const userResolvers = require('./userResolvers');

module.exports = {
  Query: {
    ...bookResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...bookResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};