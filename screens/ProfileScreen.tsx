import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useLazyQuery, useQuery } from "@apollo/client";

import {
  getOrdersByUserId,
  GetOrdersByUserIdData,
} from "../api/queries/client/getOrdersByUserId";

import UserInfo from "../components/profile/Info";
import Stats from "../components/profile/Stats";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import { OrderCard } from "../components/profile/order";

export default function ProfileScreen() {
  const [name, setName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>(
    "https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png"
  );
  const [email, setEmail] = useState<string>("");
  const [orders, setOrders] = useState<any[]>([]);
  const [userId, setUserId] = useState<string>("");

  const [ordersThisMonth, setOrdersThisMonth] = useState<number>(0);
  const [places, setPlaces] = useState<number>(0);
  const [totalOrders, setTotalOrders] = useState<number>(0);

  //const { loading, error, data } = useQuery<GetOrdersByUserIdData, { id: string }>(getOrdersByUserId, { variables: { id: userId } });
  const [getOrders, { called, loading, data }] = useLazyQuery(getOrdersByUserId);

  useEffect(() => {
    let userIdCached = 0;
    AsyncStorage.getItem("userFullName").then((res) => setName(res ? res : ""));
    AsyncStorage.getItem("id").then((res) => res ? getOrders({ variables: { id: res } }): null);
    AsyncStorage.getItem("userEmail").then((res) => setEmail(res ? res : ""));
    AsyncStorage.getItem("userPicUrl").then((res) =>
      setImageUrl(res ? res : "")
    );
    
    
  }, []);

  useEffect(() => {
    if (called == true) {
      if (typeof data === "undefined") {
        let sorted = data?.user?.ordersByUserId.nodes.sort(function (a, b) {
          return Date.parse(b.orderTime) - Date.parse(a.orderTime);
        });

        setOrders(sorted);

        setTotalOrders(sorted?.length);
        setOrdersThisMonth(getNumberOfOrdersThisMonth(sorted));
        setPlaces(getNumberOfPlaces(sorted));
      }
    }
  }, [data]);

  const getNumberOfPlaces = (orderList: []) => {
    let flags = [];
    if (typeof orderList === "undefined") return 0;
    for (let i = 0; i < orderList.length; i++) {
      if (flags.indexOf(orderList[i].restaurantId) === -1) {
        flags.push(orderList[i].restaurantId);
      }
    }
    return flags.length;
  };

  const getNumberOfOrdersThisMonth = (orderList: []) => {
    let currentDate = new Date();
    let counter = 0;
    currentDate.setMonth(currentDate.getMonth() - 1);
    if (typeof orderList != "undefined")
      orderList.map((item) =>
        Date.parse(item.orderTime) > currentDate.getTime() ? counter++ : null
      );
    return counter;
  };

  useEffect(() => {
    let sorted = data?.user?.ordersByUserId.nodes.sort(function (a, b) {
      return Date.parse(b.orderTime) - Date.parse(a.orderTime);
    });

    setOrders(sorted);

    setTotalOrders(sorted?.length);
    setOrdersThisMonth(getNumberOfOrdersThisMonth(sorted));
    setPlaces(getNumberOfPlaces(sorted));
  }, [data]);

  return (
    <React.Fragment>
      <UserInfo name={name} imageUrl={imageUrl} email={email} />
      <View style={styles.container}>
        <View style={styles.separator} />
        <Stats
          ordersThisMonth={ordersThisMonth}
          restaurants={places}
          totalOrders={totalOrders}
        />
        <ScrollView>
          {orders?.map((item, index) => (
            <OrderCard order={item} key={index} />
          ))}
        </ScrollView>
        <View style={{ height: 100 }}></View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
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
