const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

// queries and mutations.
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async (parent, args, context) => {
      const userData = await User.find();

      return userData;
    },
    // users???
    // user???
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    saveScore: async (parent, { levelScore }, context) => {
      if (context.user) {
        console.log(levelScore);
        const updatedUserScore = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: {scores: levelScore} },
          { new: true }
        );
        return updatedUserScore;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
