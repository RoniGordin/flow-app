import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

interface Props {
  time: number;
}

export default function CollectionTime(props: Props) {
  return (
    <Fragment>
      <Text style={styles.time}>{Math.floor(props.time)} min</Text>
    </Fragment>
  );
}


const styles = StyleSheet.create({
  time: {
    fontSize: 12,
    fontWeight: 'bold',

  }
});