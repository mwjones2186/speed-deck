const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { countDocuments } = require("../models/User");
const { signToken } = require("../utils/auth");

// queries and mutations.
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user.id })
          .select("__v -password")
          .populate("savedBooks");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
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
    addUser: async (parent, args)=> {
        const user = await User.create(args);
        const token = signToken(user);

        return {token, user}
    },
    saveBook: async (parent, args)
  },
};

module.exports = resolvers;
