import {gql} from "@apollo/client/core";

export const getMenuItemsByMenuId = gql`
query MyQuery($menuId: UUID!) {
  menus {
    nodes {
      itemsInMenusByMenuId(condition: {menuId: $menuId}) {
        nodes {
          itemId
        }
      }
    }
  }
}
`;