import React, {Fragment} from "react";
import { StyleSheet, Linking, ScrollView } from "react-native";
import { Button, Input } from "@ui-kitten/components";
import MenuArea from '../components/menu/MenuArea';
import {TopNavigationAccessoriesShowcase} from '../components/TopNavigation';
import { MenuScrollView } from "../components/menu/MenuScrollView";
import {useHistory} from 'react-router-native'

export default function ResturantMenuScreen() {
    const [value, setValue] = React.useState('');
    const history = useHistory();
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
        <Button style={styles.button} onPress={() => history.push("/")}>Order item</Button>

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
    marginTop:30,
    marginVertical: 2,
  },
  actionsContainer: {},
  searchStyle:{
    padding:10
  }
});
