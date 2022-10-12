import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
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

export const QUERY_USERS = gql`
  query users {
    users {
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
