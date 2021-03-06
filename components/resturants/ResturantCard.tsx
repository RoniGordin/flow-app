import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card } from '@ui-kitten/components';
import { Text } from '../Themed';

import placehloder from '../../assets/images/placeholder.png';

interface Props {
	name : string;
    color: string;
}
export const ResturantCard = (props: Props) => {
    const { name, color } = props;

  return (
    <React.Fragment>
      <Card style={styles.card} status={color} onPress={() => alert('click')}>
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