import React from "react";
import { StyleSheet, Image } from "react-native";
import { useHistory } from "react-router-native";

import { Card } from "@ui-kitten/components";
import { Text } from "../Themed";

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
        //source={{uri:imageUrl}}
        source={{
          //uri:menuItem.imageUrl
          uri: "https://prod-wolt-venue-images-cdn.wolt.com/s/b1hUH7Nk3LhRNuXEF0qb4F8G0GLn-E4fCTU-wkpY-9U/5ef98a7d81212f58438ca95e/75e8fc72-6b89-11eb-95c9-4a52c3a0b030_karela_00305.jpg",
        }}
      />
      <Text style={styles.name}>{resturant.name}</Text>
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
    height: 150,
    width: 150,
    position: "absolute",
  },
  card: {
    flex: 1,
    margin: 2,
    height: 200,
    width: 150,
  },
  name: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    marginVertical: -145,
    fontSize: 18,
    width: 150,
  },
});
