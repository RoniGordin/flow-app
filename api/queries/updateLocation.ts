

import { gql } from "@apollo/client/core";

export const updateLocation = gql`mutation MyMutation($id: UUID!, $lat: Float!, $lon: Float!) {
    updateLocation(input: { id: $id, lat: $lat, lon: $lon }) {
      order {
        id
      }
    }
  }`;



