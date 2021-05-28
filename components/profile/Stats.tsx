import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Card } from "@ui-kitten/components";
import { Text, View } from "../Themed";

interface Props {
  totalOrders: number;
  restaurants: number;
  ordersThisMonth: number;
}

export default function Stats(props: Props) {
  const { totalOrders, restaurants, ordersThisMonth } = props;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.number}>{totalOrders}</Text>
        <Text>Total Orders</Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.number}>{restaurants}</Text>
        <Text>Places</Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.number}>{ordersThisMonth}</Text>
        <Text>This Month</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    width: "33%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 28,
    textAlign: "center",
  },
  info: {
    paddingTop: 10,
  },
  name: {
    fontSize: 18,
  },
});
