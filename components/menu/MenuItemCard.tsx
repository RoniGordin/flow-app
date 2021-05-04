import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useHistory, useLocation } from "react-router-native";

import { Card } from "@ui-kitten/components";
import { Text, View } from "../Themed";
import {OrderItem} from '../../types';
import placehloder from "../../assets/images/placeholder.png";

interface Props {
  item: OrderItem;
}

export const MenuItemCard = (props: Props) => {
  const { item } = props;
  const history = useHistory();
  const {
    state: { isBuisnessMode, resturantName, items },
  } = useLocation();

  const handlePress = () => {
    history.push({
      pathname: "menuItem",
      state: { item: item, resturantName: resturantName, items: items },
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.topContainer}>
        <View style={{ flex: 0.6, padding:10  }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desctiption} numberOfLines={2}>{item.description}</Text>
          <Text style={styles.price}>{item.price.toFixed(2)}₪</Text>
        </View>
        <View style={{ flex: 0.2 }}>
          <Image style={styles.tinyLogo} source={{
            uri:item.imageSrc
          }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    height: 110,
    width: "100%",
    marginBottom: 20,
    justifyContent: "flex-start",

  },
  tinyLogo: {
    height: 110,
    width: 130,
    justifyContent: "flex-end",
    borderRadius:12,
    marginLeft:25
  },
  name:{
    fontSize:18,
    paddingBottom:8,
    fontWeight:"700"
  },
  desctiption:{
    fontSize:15,
    paddingBottom:5,
    maxHeight:45,
  },
  price:{
    color:'#4A84B8',
    fontSize:16,
    fontWeight:"800"
  }
});