import { gql } from "@apollo/client/core";

export const createOrderItem = gql`mutation MyMutation($input: OrderItemInput!) {
    createOrderItem(input: { orderItem: $input }) {
      orderItem {
        id
      }
    }
  }
  `;

export const getCreateOrderItemData = (itemId: string, orderId: number, selectedChanges: string[], comments: string) => {
    return {
        input: { itemId, orderId, selectedChanges, comments, }
    }
};
