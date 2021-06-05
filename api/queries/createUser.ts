import { gql } from "@apollo/client/core";

export const createUser = gql`mutation MyMutation($input: UserInput!) {
  createUser(input: {user: $input}) {
    user {
      id
    }
  }
}`;

export const getCreateUserData = (id: string, privateName: string, lastName: string, email: string, locale: string, fullName:string, picture: string, verifiedEmail: boolean) => {
  return {
    input: {
      id,
      privateName,
      lastName,
      email,
      locale,
      fullName,
      picture,
      verifiedEmail
    }
  }
};