import React, { Fragment, useState, useEffect, useRef } from "react";
import { View } from "../components/Themed";
import { TopNavigationAccessoriesShowcase } from "../components/TopNavigation";
import MenuArea from "../components/menu/MenuArea";
import { Button, Icon, IconProps, Input } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";
import { useHistory, useLocation } from "react-router-native";
import { StyleSheet, Animated } from "react-native";
import data from "../constants/DummyOrderData";

interface Props {}

function ResturantMenu(props: Props) {
  const [value, setValue] = React.useState("");
  const history = useHistory();
  const {
    state: { isBuisnessMode, resturantName, items },
  } = useLocation();

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const submitOrder = () => {
    history.push({
      pathname: "order",
      state: { resturantName: resturantName, items: items },
    });
  };

  return (
    <View style={styles.container}>
      <TopNavigationAccessoriesShowcase title={`${resturantName}'s Menu`} />
      <Input
        placeholder="🔍Search menu"
        value={value}
        style={styles.searchStyle}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <ScrollView style={styles.menusContainer}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {data.map((item, index) => (
            <MenuArea
              key={index}
              title={item.name}
              data={item.items}
              enableAdding={isBuisnessMode}
            />
          ))}
        </Animated.View>
      </ScrollView>
      {!isBuisnessMode && (
        <Button style={styles.button} onPress={submitOrder}>
          Finish Order
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "5%",
  },
  menusContainer: {
    flex: 1,
  },
  button: {
    marginTop: 30,
    marginVertical: 2,
  },
  searchStyle: {
    padding: 10,
  },
});

export default ResturantMenu;
