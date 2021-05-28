import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import UserInfo from "../components/profile/Info";
import Stats from "../components/profile/Stats";

export default function ProfileScreen() {
  return (
    <React.Fragment>
      <UserInfo name="Jacob" />
      <View style={styles.container}>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Stats ordersThisMonth={2} restaurants={5} totalOrders={33}/>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
