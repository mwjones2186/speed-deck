import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;
export const SAVE_SCORE = gql`
  mutation saveScore($levelScore: ScoreInput!) {
    saveScore(levelScore: $levelScore) {
      _id
      username
      email
      savedScore {
        _id
        levelName
        score
      }
    }
  }
`;
