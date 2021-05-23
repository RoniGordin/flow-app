import { gql } from "@apollo/client/core";

export const createOrder = gql`mutation MyMutation($input: OrderInput!) {
  createOrder(input: {order: $input}) {
    order {
      id
    }
  }
}`;

export const getCreateOrderData = (userId: string, arrivingTime: Date | undefined, notes: string, orderTime: Date, restaurantId: string, status: string, arrivalWayId: number) => {
  return {
    input: {
      userId,
      arrivingTime,
      notes,
      orderTime,
      restaurantId,
      status,
      arrivalWayId
    }
  }
};