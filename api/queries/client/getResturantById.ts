import {gql} from "@apollo/client/core";
import {MenuItem, Resturant} from "../../../types";

export const getResturantById = gql`
query MyQuery($id: UUID!) {
  restaurant(id: $id) {
    menusByRestaurantId {
      nodes {
        itemsInMenusByMenuId {
          nodes {
            itemId
            menuItemByItemId {
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
        id
      }
    }
    id
    address
    name
    openingHours
  }
}
`;

export type GetResturantByIdData = {
  restaurant: Resturant & {
    menusByRestaurantId: {
      id: string,
      nodes: {
        itemsInMenusByMenuId: {
          nodes: { menuItemByItemId: MenuItem }[]
        }
      }[]
    }
  }
};