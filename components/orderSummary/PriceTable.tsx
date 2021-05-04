import React, { useEffect, useState } from "react";
import { Divider, List, ListItem } from "@ui-kitten/components";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { View, Text } from "../Themed";

import { OrderSummaryItem } from "../../types";

interface Props {
  orderList: OrderSummaryItem[];
  removeItem: Function;
}

export default function PriceTable(props: Props) {
  const [orderTable, setOrderTable] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { orderList, removeItem } = props;
  const [localOrderList, setLocalOrderList] = useState(orderList);

  useEffect(() => {
    renderTable(localOrderList);
  }, [localOrderList]);

  const removeItemFromList = (index: number) => {
    localOrderList.splice(index, 1);
    renderTable(localOrderList);
    setLocalOrderList(localOrderList);
    removeItem();
  };
  
  const fillChanges = (changes) => {
    if(changes != undefined) {
      return Object.entries(changes)
          .filter((item) => {
            if (item[1]) return item[0];
          })
          .map((value) => value[0])
    } else{
      return ""
    }
  }

  const renderTable = (currentOrderList) => {
    let data = [];
    let priceSum: number = 0;
    currentOrderList.map((item) => {
      console.log(item.changes)
      let innerData = {
        title: `${item.name} - ${item.price}₪`,
        description: fillChanges(item.changes)
      };
      data.push(innerData);
      priceSum += item.price;
    });

    setTotalPrice(priceSum);
    setOrderTable(data);
  };

  const renderItemAccessory = (index: number) => (
    <MaterialIcons
      name="cancel"
      size={28}
      color="white"
      onPress={() => removeItemFromList(index)}
    />
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={<Text style={styles.row}>{item.title}</Text>}
      description={`${item.description}`}
      accessoryRight={() => renderItemAccessory(index)}
    />
  );

  return (
    <View>
      <Text style={styles.headline}>Prices</Text>
      <Divider />
      <List
        style={styles.table}
        data={orderTable}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />

      <View>
        <Text style={styles.footer}>Total price of: {totalPrice}₪</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    paddingTop: 5,
    height: 270,
  },
  headline: {
    textAlign: "left",
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginLeft: 5,
    letterSpacing: 0.5,
    fontSize: 17,
  },
  wrapper: { flexDirection: "row" },
  text: { margin: 6, textAlign: "center", fontSize: 16, color: "white" },
  footer: {
    textAlign: "center",
    fontSize: 22,
    justifyContent: "center",
    fontWeight: "900",
    color: "white",
  },
  row: {
    fontSize: 16,
  },
  });
