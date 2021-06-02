import { gql } from "@apollo/client/core";
import { OrderStatusEnum } from "../../constants/OrderStatusEnum";

export const createOrder = gql`mutation MyMutation($input: OrderInput!) {
  createOrder(input: {order: $input}) {
    order {
      id
    }
  }
}`;

export const getCreateOrderData = (userId: string, arrivingTime: Date | undefined, notes: string, orderTime: Date, restaurantId: string, status: OrderStatusEnum, arrivalWayId: number | undefined) => {
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