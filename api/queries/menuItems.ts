import {gql} from "@apollo/client/core";

export const getMenuItems = gql`query MyQuery {
  menuItems {
    nodes {
      name
      imageUrl
      category
    }
  }
}`;
