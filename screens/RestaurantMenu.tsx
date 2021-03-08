import React, {Fragment} from "react";
import { StyleSheet, Linking, ScrollView } from "react-native";
import { Input } from "@ui-kitten/components";
import MenuArea from '../components/menu/MenuArea';
import {TopNavigationAccessoriesShowcase} from '../components/TopNavigation';
import { MenuScrollView } from "../components/menu/MenuScrollView";

export default function ResturantMenuScreen() {
    const [value, setValue] = React.useState('');

  return (
    <Fragment>
      <TopNavigationAccessoriesShowcase title="Menu" />
      <Input
        placeholder="Search menu"
        value={value}
        style={styles.searchStyle}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <ScrollView>
        <MenuArea title="Entrees" />
        <MenuArea title="Main Courses" />
        <MenuArea title="Deserts" />
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
