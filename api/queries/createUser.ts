import { gql } from "@apollo/client/core";

export const createUser = gql`mutation MyMutation($input: UserInput!) {
  createUser(input: {user: $input}) {
    user {
      id
    }
  }
}`;

export const getCreateUserData = (id: string, username:string) => {
  return {
    input: {
      id,
      username,
    }
  }
};