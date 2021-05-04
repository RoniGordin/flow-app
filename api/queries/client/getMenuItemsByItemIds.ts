import {gql} from "@apollo/client/core";

export const getMenuItemsByItemIds = gql`
query MyQuery($in: [UUID!] = "") {
  menuItems(filter: {id: {in: $in}}) {
    nodes {
      category
      changes
      description
      id
      imageUrl
      name
      price
    }
  }
}
`;