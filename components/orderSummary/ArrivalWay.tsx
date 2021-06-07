import React, { useState } from "react";
import { StyleSheet,View } from "react-native";
import { Button } from "@ui-kitten/components";
import { arrivalWays } from '../../constants/ArrivalWays'

interface Props {
  onArrivingWaySelection: (id: number) => void;
  selectedId: number,
}


export default function ArrivalWay(props: Props) {
  return (
    <View style={styles.container}>
      {arrivalWays.map(item => (<Button style={[styles.button, props.selectedId === item.id && { backgroundColor: '#35709B', borderColor: '#35709B' }]} key={item.id} status="info" onPress={() => props.onArrivingWaySelection(item.id)} accessoryLeft={item.icon} />))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent:"center"
  },
  button: {
    margin: 2,
    borderRadius: 90,
    height: 80,
    width: 80,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 8,
    backgroundColor: "#54B0F3",
    borderColor: "#54B0F3",
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
