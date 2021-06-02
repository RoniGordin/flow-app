import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Avatar } from "@ui-kitten/components";
import { Text, View } from "../Themed";

interface Props {
  name: string;
  imageUrl:string;
  email:string;
}

export default function UserInfo(props: Props) {
  const { name, imageUrl } = props;

  return (
    <View style={styles.container}>
      <Avatar source={{uri:imageUrl}} style={styles.avatar} />
      <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: "center",
  },
  avatar: {
   height:90,
   width:90
  },
  info:{
    paddingTop:10,
  },
  name:{
      fontSize:18
  }
});
