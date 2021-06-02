import { gql } from "@apollo/client/core";
import { ItemInOrder, Order } from "../../../types";

export const getArrivalTime = gql`
query getArrivalTime($resId: UUID!, $arrivalWay: Int!, $lat: Float!, $lon: Float!) {
  getArrivalTime(resId: $resId, arrivalWay: $arrivalWay, lat: $lat, lon: $lon) 
}
`;
