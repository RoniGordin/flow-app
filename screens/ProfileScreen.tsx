import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/client";

import {
  getOrdersByUserId,
  GetOrdersByUserIdData,
} from "../api/queries/client/getOrdersByUserId";

import UserInfo from "../components/profile/Info";
import Stats from "../components/profile/Stats";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProfileScreen() {
  const { loading, error, data } = useQuery<GetOrdersByUserIdData, { id: string }>(getOrdersByUserId, { variables: { id: "11025265250842855779300000000000" } });
  const [name, setName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png");
  const [email, setEmail] = useState<string>("");
  const [id, setId] = useState<string>("");

  useEffect(() => {
    AsyncStorage.getItem("userFullName").then(res=> setName(res? res:""));
    AsyncStorage.getItem("id").then(res=> setId(res? res:""));
    AsyncStorage.getItem("userEmail").then(res=> setEmail(res? res:""));
    AsyncStorage.getItem("userPicUrl").then(res=> setImageUrl(res? res:""));
    
  }, []);

  useEffect(() => {
    console.log(data)
    
  }, [data]);

  return (
    <React.Fragment>
      <UserInfo name={name} imageUrl={imageUrl} email={email} />
      <View style={styles.container}>
        <View
          style={styles.separator}
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
