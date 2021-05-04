import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useHistory } from "react-router-native";

import { Card } from '@ui-kitten/components';
import { Text } from '../Themed';

import placehloder from '../../assets/images/placeholder.png';

interface Props {
	name : string;
  imageUrl?:string;
}

export const ResturantCard = (props: Props) => {
    const { name, imageUrl } = props;
    const history = useHistory();

    const onResturantClick = () => {
      history.push({pathname: 'menu', state: {isBuisnessMode: false, resturantName: name, items:[]}})
    }

  return (
    <React.Fragment>
      <Card style={styles.card} onPress={onResturantClick}>
        <Image
          style={styles.tinyLogo}
          source={{uri:imageUrl}}
        />
        <Text style={styles.name}>{name}</Text>
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
    height:150,
    width:150,
    position:'absolute'
  },
  card: {
    flex: 1,
    margin: 2,
    height:200,
    width:150
  },
  name:{
    position:'absolute',
    bottom:0,
    zIndex:2,
    marginVertical:-145,
    fontSize:18,
    width:150
  }
});