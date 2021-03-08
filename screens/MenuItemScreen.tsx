import React, {Fragment} from "react";
import { StyleSheet, Linking, ScrollView } from "react-native";
import {TopNavigationAccessoriesShowcase} from '../components/TopNavigation';
import IngrediantCustomizationButtons from "../components/menu_item/IngrediantCustomizationButtons";

interface Props {
  name: string;
}

export default function ResturantMenuScreen(props: Props) {
    const [value, setValue] = React.useState('');
    const ingrediants = ["Tomato","Onions","Banana"]
    const {name} = props;
  return (
    <Fragment>
      <TopNavigationAccessoriesShowcase title={name} />
      <IngrediantCustomizationButtons ingrediants={ingrediants}></IngrediantCustomizationButtons>
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
