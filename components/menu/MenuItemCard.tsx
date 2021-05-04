import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {useHistory} from 'react-router-native';

import {Card} from '@ui-kitten/components';
import {Text, View} from '../Themed';

import placehloder from '../../assets/images/placeholder.png';
import {MenuItem} from "../../types";

interface Props {
  menuItem: MenuItem;
}

export const MenuItemCard = (props: Props) => {
  const {menuItem} = props;
  const history = useHistory();

  const handlePress = () => {
    history.push({pathname: 'menuItem', state: {menuItem: menuItem}});
  };

  return (
    <View>
      <Card style={styles.card} onPress={handlePress}>
        <Image style={styles.tinyLogo} source={placehloder}/>
        <Text style={{color: 'black'}}>{menuItem.name}</Text>
      </Card>
		</View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    height: 140,
    width: 140,
    position: 'absolute',
  },
  card: {
    flex: 1,
    margin: 2,
    height: 140,
    width: 140,
  },
});
