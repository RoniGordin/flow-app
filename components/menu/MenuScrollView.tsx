import React from "react";
import { ScrollView } from "react-native";
import { MenuItemCard } from "./MenuItemCard";
import { Text, View } from "../Themed";

//import data from '../../constants/DummyOrderData';
import { OrderItem } from "../../types";
// TODO : switch with json object that represents menu item

interface Props {
  data: OrderItem[];
}

export const MenuScrollView = (props) => {
  const { data } = props;

  return (
    <View>
      {data.map((item, index) => (
        <MenuItemCard
          key={index}
          item={item}
        />
      ))}
    </View>
  );
};
