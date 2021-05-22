import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useHistory, useLocation } from "react-router-native";

import { Card } from "@ui-kitten/components";
import { Text, View } from "../Themed";
import placehloder from "../../assets/images/placeholder.png";
import { MenuItem } from "../../types";

interface Props {
  menuItem: MenuItem;
}

export const MenuItemCard = (props: Props) => {
  const { menuItem } = props;
  const history = useHistory();

  const {
    state: { resturantName, items },
  } = useLocation();

  const handlePress = () => {
    history.push({
      pathname: "menuItem",
      state: {
        item: menuItem,
        resturantName: resturantName,
        items: items,
      },
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.topContainer}>
        <View style={{ flex: 0.6, padding: 10 }}>
          <Text style={styles.name}>{menuItem.name}</Text>
          <Text style={styles.desctiption} numberOfLines={2}>
            {menuItem.description}
          </Text>
          <Text style={styles.price}>{menuItem.price.toFixed(2)}₪</Text>
        </View>
        <View style={{ flex: 0.2 }}>
          <Image
            style={styles.tinyLogo}
            source={{
              //uri:menuItem.imageUrl
              uri: "https://prod-wolt-venue-images-cdn.wolt.com/s/b1hUH7Nk3LhRNuXEF0qb4F8G0GLn-E4fCTU-wkpY-9U/5ef98a7d81212f58438ca95e/75e8fc72-6b89-11eb-95c9-4a52c3a0b030_karela_00305.jpg",
            }}
          />
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
    borderRadius: 12,
    marginLeft: 25,
  },
  name: {
    fontSize: 18,
    paddingBottom: 8,
    fontWeight: "700",
  },
  desctiption: {
    fontSize: 15,
    paddingBottom: 5,
    maxHeight: 45,
  },
  price: {
    color: "#4A84B8",
    fontSize: 16,
    fontWeight: "800",
  },
});
