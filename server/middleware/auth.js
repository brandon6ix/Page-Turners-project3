const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req) => {
  const authHeader = req.headers.authorization || '';

  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];
    if (token) {
      try {
        const { userId } = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(userId); 
        if (!user) throw new Error('User not found');
        return user; 
      } catch (err) {
        console.log('Invalid/Expired token');
        throw new Error('Invalid/Expired token');
      }
    }
    throw new Error('Authentication token must be \'Bearer [token]\'');
  }
  throw new Error('Authorization header must be provided');
};

module.exports = authMiddleware;
