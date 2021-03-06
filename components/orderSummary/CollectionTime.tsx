import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

interface Props {
  time: number;
}

export default function CollectionTime(props: Props) {
  return (
    <Fragment>
      <Text style={styles.time}>6 min</Text>
    </Fragment>
  );
}


const styles = StyleSheet.create({
    time: {
        fontSize: 30,
        fontWeight:'bold',
    }
});