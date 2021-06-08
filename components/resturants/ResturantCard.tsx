import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import { useHistory } from "react-router-native";

import { Card } from "@ui-kitten/components";

import placehloder from "../../assets/images/placeholder.png";
import { Resturant } from "../../types";

interface Props {
  resturant: Resturant;
}

export const ResturantCard = (props: Props) => {
  const { resturant } = props;
  const history = useHistory();

  const onResturantClick = () => {
    history.push({
      pathname: "menu",
      state: {
        isBuisnessMode: false,
        resturantName: resturant.name,
        items: [],
        resturantId: resturant.id,
      },
    });
  };

  return (
    <React.Fragment>
      <Card style={styles.card} onPress={onResturantClick}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: resturant.imageUrl
              ? resturant.imageUrl
              : "https://prod-wolt-venue-images-cdn.wolt.com/s/b1hUH7Nk3LhRNuXEF0qb4F8G0GLn-E4fCTU-wkpY-9U/5ef98a7d81212f58438ca95e/75e8fc72-6b89-11eb-95c9-4a52c3a0b030_karela_00305.jpg",
          }}
        />
        <Text style={styles.name}>{resturant.name}</Text>
        <Text style={styles.address}>{resturant.address}</Text>
        <Text style={styles.hours}>{resturant.openingHours}</Text>
      </Card>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tinyLogo: {
    height: 180,
    width: 180,
    position: "absolute",
  },
  card: {
    flex: 1,
    margin: 2,
    height: 250,
    width: 180,
  },
  name: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    marginVertical: -175,
    fontSize: 18,
    fontWeight: "bold",
    width: 150,
    color: "#393939",
  },
  address: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    marginVertical: -190,
    fontSize: 16,
    fontWeight: "600",
    width: 150,
    color: "#525456",
  },
  hours: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    marginVertical: -210,
    fontSize: 16,
    width: 150,
    color: "#8E8E8E",
  },
});
