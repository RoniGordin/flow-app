import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { getOrderByOrderId } from "../../api/queries/client/getOrderByOrderId";



interface Props {
   order: any;
}

export const OrderCard = (props: Props) => {
    const { order } = props;

  return (
    <React.Fragment>
       <View style={styles.topContainer}>
        <View style={{ flex: 0.6, padding: 10 }}>
          <Text style={styles.name}>Order #{order.id.substring(28, 37)}</Text>
          <Text style={styles.desctiption} numberOfLines={2}>
            {new Date(Date.parse(order.orderTime)).toLocaleString()}
          </Text>
          <Text style={order.status =="DONE" ? styles.done : styles.new}>Status: {order.status}</Text>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
    topContainer: {
      flexDirection: "row",
      height: 110,
      width: "100%",
      marginBottom: 20,
      justifyContent: "flex-start",
    },
    tinyLogo: {
      height: 110,
      width: 130,
      justifyContent: "flex-end",
      borderRadius: 12,
      marginLeft: 25,
    },
    name: {
      fontSize: 18,
      paddingBottom: 8,
      fontWeight: "700",
    },
    desctiption: {
      fontSize: 15,
      paddingBottom: 5,
      maxHeight: 45,
    },
    new: {
      color: "#36B2F6",
      fontSize: 16,
      fontWeight: "800",
    },
    done: {
        color: "#00A300",
        fontSize: 16,
        fontWeight: "800",
      },
  });
  