import React, {Fragment} from "react";
import { StyleSheet, Linking, ScrollView } from "react-native";
import { Input } from "@ui-kitten/components";
import ResturantArea from '../components/resturants/ResturantArea';
import {TopNavigationAccessoriesShowcase} from '../components/TopNavigation';

export default function ResturantsScreen() {
    const [value, setValue] = React.useState('');

  return (
    <Fragment>
      <TopNavigationAccessoriesShowcase title="Resturants" />
      <Input
        placeholder="Search resturant"
        value={value}
        style={styles.searchStyle}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <ScrollView>
        <ResturantArea title="Recommended" />
        <ResturantArea title="Near you" />
        <ResturantArea title="Your Latest" />
      </ScrollView>
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
  searchStyle:{
    padding:10
  }
});
