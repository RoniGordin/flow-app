import React, { useEffect, useState } from "react";
import { Table, Rows, Row } from "react-native-table-component";
import { Text, Divider, Layout } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

import { OrderItem } from "../../types";

interface Props {
  orderList: OrderItem[];
}



export default function PriceTable(props: Props) {
  const [tableData, setTableData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { orderList } = props;

  useEffect(() => {
    let data:[string, number] = [];
    let priceSum:number = 0;

    orderList.map((item) => {
      let innerData:[string, number] = [item.name, item.price];
      data.push(innerData);
      priceSum += item.price;
    });

    setTotalPrice(priceSum);
    setTableData(data);
  }, [orderList]);

  return (
    <View>
      <Text style={styles.headline}>Prices</Text>
      <Divider />
      <Table style={styles.table}>
        <Rows data={tableData} textStyle={styles.text} />
        <Row data={[`Total: ${totalPrice}`]} textStyle={styles.footer} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  table:{
    paddingTop:5
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
  text: { margin: 6, textAlign: "center", fontSize: 16 },
  footer: { margin: 6, textAlign: "center", fontSize: 18, fontWeight: "900" },
});
