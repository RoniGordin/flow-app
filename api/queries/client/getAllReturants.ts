import {gql} from "@apollo/client/core";
import {Resturant} from "../../../types";

export const getAllResturants = gql`query MyQuery {
  restaurants {
    nodes {
      address
      id
      name
      openingHours
      imageUrl
    }
  }
}`;

export type GetAllReturantsData = {
  restaurants: { nodes: Resturant[]}
};

