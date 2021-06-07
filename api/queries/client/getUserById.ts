import {gql} from "@apollo/client/core";
import {User} from "../../../types";

export const getUserById = gql `
query MyQuery($id: UUID!) {
  user(id: $id) {
    address
    id
    isAdmin
    username
  }
}
`;

export type GetUserByIdData = {
  id: String
}