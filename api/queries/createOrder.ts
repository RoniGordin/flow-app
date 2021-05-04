import {gql} from "@apollo/client/core";

export const createOrder = gql`mutation MyMutation($input: OrderInput!) {
  createOrder(input: {order: $input}) {
    order {
      id
    }
  }
}`;

export const getCreateOrderData = (userId: string, arrivingTime: string, notes: string, orderTime: string, restaurantId: string, status: string) => {
  return {
    input: {
      userId,
      arrivingTime,
      notes,
      orderTime,
      restaurantId,
      status
    }
  }
};