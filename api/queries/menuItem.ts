import {gql} from "@apollo/client/core";

export const getMenuItem = gql`query MyQuery($id: UUID!) {
  menuItem(id: $id){
    changes
  }
}`;