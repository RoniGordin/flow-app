import React, {useEffect, useState} from 'react';
import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";

import {
  getOrdersByUserId,
  GetOrdersByUserIdData,
} from "../api/queries/client/getOrdersByUserId";
import { Text, View } from "../components/Themed";

import UserInfo from "../components/profile/Info";
import Stats from "../components/profile/Stats";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProfileScreen() {
  const { loading, error, data } = useQuery<GetOrdersByUserIdData, { id: string }>(getOrdersByUserId, { variables: { id: "jacob" } });
  const [name, setName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    AsyncStorage.getItem("userFullName").then(res=> setName(res? res:""));
    AsyncStorage.getItem("userEmail").then(res=> setEmail(res? res:""));
    AsyncStorage.getItem("userPicUrl").then(res=> setImageUrl(res? res:""));
    
  }, []);

  return (
    <React.Fragment>
      <UserInfo name={name} imageUrl={imageUrl} email={email} />
      <View style={styles.container}>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Stats ordersThisMonth={2} restaurants={5} totalOrders={33} />
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
