import React from 'react';
import { StyleSheet, Image } from "react-native";
import { useHistory } from "react-router-native";

import { Card } from '@ui-kitten/components';
import { Text } from '../Themed';

import placehloder from '../../assets/images/placeholder.png';

interface Props {
	name : string;
}
export const MenuItemCard = (props: Props) => {
    const { name } = props;
    const history = useHistory();


  return (
    <React.Fragment>
      <Card style={styles.card} onPress={() => history.push('menuItem')}>
        <Image
          style={styles.tinyLogo}
          source={placehloder}
        />
        <Text style={{color:'black'}}>{name}</Text>
      </Card>
    </React.Fragment>
  )
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    height:140,
    width:140,
    position:'absolute'
  },
  card: {
    flex: 1,
    margin: 2,
    height:140,
    width:140
  }
});