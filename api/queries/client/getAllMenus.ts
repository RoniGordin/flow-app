import {gql} from "@apollo/client/core";

export const getAllMenus = gql`
query MyQuery {
  menus {
    nodes {
      restaurantId
      id
    }
  }
}
`;