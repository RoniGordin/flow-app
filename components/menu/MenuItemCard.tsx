import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import { useHistory, useLocation } from "react-router-native";

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
              uri:menuItem.imageUrl
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
    color: "#36B2F6",
    fontSize: 16,
    fontWeight: "800",
  },
});
