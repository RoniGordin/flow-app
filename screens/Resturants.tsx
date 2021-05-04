import React, {Fragment, useEffect, useState} from "react";
import {StyleSheet, Linking, ScrollView} from "react-native";
import {Input} from "@ui-kitten/components";
import ResturantArea from '../components/resturants/ResturantArea';
import {TopNavigationAccessoriesShowcase} from '../components/TopNavigation';
import {useQuery} from "@apollo/client";
import {getAllResturants, GetAllReturantsData} from "../api/queries/client/getAllReturants";
import {View, Text} from "../components/Themed";
import {Resturant} from "../types";

export default function ResturantsScreen() {
  const [value, setValue] = React.useState('');
  const [allResturants, setAllResturants] = useState<Resturant[]>([]);
  const {loading, error, data} = useQuery<GetAllReturantsData>(getAllResturants);

  useEffect(() => {
    setAllResturants(data?.restaurants?.nodes || []);

  }, [data, loading]);

  return (
    <Fragment>
      <TopNavigationAccessoriesShowcase title="Resturants"/>
      <View>
        <Input
          placeholder="🔍Search resturant"
          value={value}
          style={styles.searchStyle}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
        <ScrollView>
          <ResturantArea title="Recommended" resturants={allResturants}/>
          <ResturantArea title="Near you" resturants={allResturants}/>
          <ResturantArea title="Your Latest" resturants={allResturants}/>
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
    textAlign: 'center',
  }
});
