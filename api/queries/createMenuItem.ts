import {gql} from "@apollo/client/core";

export const createMenuItem = gql`mutation MyMutation($input: MenuItemInput!) {
  createMenuItem(
    input: {menuItem: $input}
  ) {
    menuItem {
      id
    }
  }
}`;

export const getCreateMenuItemData = (name: string, price: number, changes: string[], description: string, category: string, averagePreparationTime: number, imageUrl: string) => {
  return {
    input: {name, price, changes, description, category, averagePreparationTime, imageUrl}
  }
};
