import React from 'react';
import {ScrollView} from 'react-native';
import {ResturantCard} from './ResturantCard';
import {Resturant} from "../../types";

interface Props {
  resturants: Resturant[]
}

export const ResturantScrollView = (props: Props) => {
  const {resturants = []} = props;

  return (
    <ScrollView horizontal={true}>
      {resturants?.map?.(resturant =>
        <ResturantCard key={resturant.id} resturant={resturant}/>
      )}
    </ScrollView>
  )
};
