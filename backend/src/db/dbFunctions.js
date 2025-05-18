const User = require('./UserModel');

const dbFunctions = {
  // Find user by email
  findUserByEmail: async (email) => {
    return await User.findOne({ email });
  },

  // Create new user
  createUser: async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
  },

  // Get user by ID
  getUserById: async (userId) => {
    return await User.findById(userId);
  },

  // Update user
  updateUser: async (userId, updateData) => {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  },

  // Delete user
  deleteUser: async (userId) => {
    const result = await User.findByIdAndDelete(userId);
    return !!result;
  }
};

module.exports = dbFunctions;
