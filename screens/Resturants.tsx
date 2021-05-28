import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet, Linking, ScrollView } from "react-native";
import { Input } from "@ui-kitten/components";
import ResturantArea from "../components/resturants/ResturantArea";
import { TopNavigationAccessoriesShowcase } from "../components/TopNavigation";
import { useQuery } from "@apollo/client";
import {
  getAllResturants,
  GetAllReturantsData,
} from "../api/queries/client/getAllReturants";
import { View, Text } from "../components/Themed";
import { Resturant } from "../types";

export default function ResturantsScreen() {
  const [value, setValue] = React.useState("");
  const [allRestaurants, setAllRestaurants] = useState<Resturant[]>([]);
  const [visibleRestaurants, setVisibleRestaurants] = useState<Resturant[]>([]);
  const { loading, error, data } =
    useQuery<GetAllReturantsData>(getAllResturants);

  useEffect(() => {
    setAllRestaurants(data?.restaurants?.nodes || []);
    setVisibleRestaurants(data?.restaurants?.nodes || []);
  }, [data, loading]);

  const onSearchChanged = (nextValue: string) => {
    setVisibleRestaurants(allRestaurants.filter(item=> item.name.toLowerCase().includes(nextValue.toLowerCase())));
    setValue(nextValue);
  };

  return (
    <Fragment>
      <TopNavigationAccessoriesShowcase title="Restaurants" />
      <View>
        <Input
          placeholder="🔍Search restaurant"
          value={value}
          style={styles.searchStyle}
          onChangeText={onSearchChanged}
        />
        <ScrollView>
          <ResturantArea title="Recommended" resturants={visibleRestaurants} />
          <ResturantArea title="Near you" resturants={visibleRestaurants} />
          <ResturantArea title="Your Latest" resturants={visibleRestaurants} />
        </ScrollView>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: 2,
  },
  button: {
    marginVertical: 2,
  },
  actionsContainer: {},
  searchStyle: {
    padding: 10,
    textAlign: "center",
  },
});
