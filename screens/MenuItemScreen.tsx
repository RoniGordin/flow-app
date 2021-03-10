import React, {Fragment} from "react";
import { StyleSheet, Linking, ScrollView, Image } from "react-native";
import {TopNavigationAccessoriesShowcase} from '../components/TopNavigation';
import {IngrediantCustomizationButtons} from "../components/menu_item/IngrediantCustomizationButtons";
import { Button, Card, IndexPath, Select, SelectItem } from "@ui-kitten/components";
interface Props {
  name: string;
}

export default function ResturantMenuScreen(props: Props) {
    const [value, setValue] = React.useState('');
    const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>([new IndexPath(0)]);
    const ingrediants = ["Tomato","Onions","Banana"]
    const {name} = props;
  return (
    
    <Fragment>
      <Image
        source={require("../assets/images/placeholder.png")}
        style={styles.itemImage}/>

      <Select
                multiSelect={true}
                style={styles.button}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                    {ingrediants.map((i,index) =>
                        <SelectItem key={index} title={i}></SelectItem>
                    )}

            </Select>
      <Button style={styles.button}>Order item</Button>
    </Fragment>
  );
}



const styles = StyleSheet.create({
  itemImage: {
    marginTop: 100,
    marginLeft: 110,
    marginBottom: 50,
    width: 200, 
    height:200
  },
  button: {
    marginVertical: 2,
    width:200,
    marginTop:40,
    marginLeft: 100
  },
});
