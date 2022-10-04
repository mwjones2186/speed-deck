const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedScore: [Score]
  }
  type Score {
    _id: ID
    levelName: String
    score: Int
  }
  type Auth {
    token: ID
    user: User
  }
  input ScoreInput{
    levelName: String
    score: Int
  }
  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveScore(levelScore: ScoreInput!): User
  }
`;

module.exports = typeDefs;
