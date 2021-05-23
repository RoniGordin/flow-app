

import { gql } from "@apollo/client/core";

export const updateLocation = gql`mutation MyMutation($id: UUID!, $lat: Float!, $lon: Float!, $resId: UUID!) {
    updateLocation(input: { id: $id, lat: $lat, lon: $lon, resId: $resId }) {
      order {
        arrivingTime
      }
    }
  }`;



