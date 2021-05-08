import {gql} from "@apollo/client/core";
import {ItemInOrder, Order} from "../../../types";

export const getOrderByOrderId = gql`
query MyQuery($id: UUID!) {
  order(id: $id) {
    arrivingTime
    id
    notes
    orderItemsByOrderId {
      nodes {
        comments
        id
        orderId
        selectedChanges
      }
    }
    orderTime
    restaurantId
    status
    userId
  }
}
`;

export type GetOrderByOrderIdData = {
  order: Order & {
    orderItemsByOrderId: {
      nodes: ItemInOrder[]
    }
  }
}