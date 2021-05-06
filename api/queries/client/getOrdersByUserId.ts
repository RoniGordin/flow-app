import {gql} from "@apollo/client/core";
import {Order, User} from "../../../types";

export const getOrdersByUserId = gql`
query MyQuery($id: UUID!) {
  user(id: $id) {
    ordersByUserId {
      nodes {
        arrivingTime
        id
        notes
        orderTime
        restaurantId
        status
        userId
      }
    }
    address
    id
    isAdmin
    username
  }
}
`;

export type GetOrdersByUserIdData = {
  user: User & {
    ordersByUserId: {
      nodes: Order[]
    }
  }
}