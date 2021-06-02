import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";
import { View } from "../Themed";
import { arrivalWays } from '../../constants/ArrivalWays'

interface Props {
  onArrivingWaySelection: (id: number) => void;
  selectedId: number,
}


export default function ArrivalWay(props: Props) {
  return (
    <View style={styles.container}>
      {arrivalWays.map(item => (<Button style={[styles.button, props.selectedId === item.id && { backgroundColor: '#9a383e', borderColor: '#9a383e' }]} key={item.id} status="info" onPress={() => props.onArrivingWaySelection(item.id)} accessoryLeft={item.icon} />))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  },
  button: {
    margin: 2,
    borderRadius: 90,
    height: 80,
    width: 80,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 8,
    backgroundColor: "#F85F6A",
    borderColor: "#F85F6A",
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
