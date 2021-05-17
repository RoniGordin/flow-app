import React, { Fragment, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Image,
  GestureResponderEvent,
  Animated,
} from "react-native";

import { TopNavigationAccessoriesShowcase } from "../components/TopNavigation";
import { Button, Text, Divider } from "@ui-kitten/components";
import { useHistory, useLocation } from "react-router-native";
import { View } from "../components/Themed";
import _ from "lodash";

interface Props {}

type Changes = Record<string, boolean>;

export default function MenuItemScreen(props: Props) {
  const {
    state: { isBuisnessMode, resturantName, items, item },
  } = useLocation();

  const [changes, setChanges] = useState<Changes>(
    item.possibleChanges.reduce((acc, change) => {
      acc[change] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );
  const history = useHistory();

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 450,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handlePossibleChangeClick = (change: string) => {
    setChanges(Object.assign({}, changes, { [change]: !changes[change] }));
  };

  const onItemOrder = () => {
    items.push({ name: item.name, price: item.price, changes: changes });
    history.push({
      pathname: "menu",
      state: {
        isBuisnessMode: false,
        resturantName: resturantName,
        items: items,
      },
    });
  };

  return (
    <View>
      <TopNavigationAccessoriesShowcase title={item.name} />
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={styles.container}>
          <Image source={{ uri: item.imageSrc }} style={styles.itemImage} />

          <View style={styles.titleContainer}>
            <Text style={styles.description} category="h6">
              {item.description}
            </Text>
            <Divider style={styles.divider} />
          </View>

          {Object.entries(changes).length != 0 ? (
            <React.Fragment>
              <View style={styles.titleContainer}>
                <Text style={styles.title} category="h5">
                  Possible Changes
                </Text>
                <Divider style={styles.divider} />
              </View>

              <View style={styles.possibleChangesContainer}>
                {Object.entries(changes).map(([change, isChecked]) => (
                  <SingleChange
                    key={change}
                    name={change}
                    isChecked={isChecked}
                    onPress={handlePossibleChangeClick}
                  />
                ))}
              </View>
            </React.Fragment>
          ) : null}

          <Button
            style={styles.button}
            onPress={onItemOrder}
            appearance="filled"
          >
            Order Item
          </Button>
        </View>
      </Animated.View>
    </View>
  );
}

interface SingleChange {
  name: string;
  isChecked: boolean;
  onPress: (name: string) => void;
}

function SingleChange(props: SingleChange) {
  const { name, isChecked, onPress } = props;

  const handlePress = (_event: GestureResponderEvent) => {
    onPress(name);
  };

  return (
    <Button
      appearance={isChecked ? "filled" : "outline"}
      key={name}
      onPress={handlePress}
      style={styles.possibleChange}
    >
      {props.name}
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    margin: 10,
  },
  itemImage: {
    marginBottom: 30,
    width: 350,
    height: 250,
  },
  button: {
    marginVertical: 2,
    width: 200,
    marginTop: 30,
    backgroundColor: "#2ECC71",
    borderColor: "#2ECC71",
  },
  title: {
    marginTop: 5,
  },
  divider: {
    flex: 1,
  },
  possibleChangesContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  possibleChange: {
    margin: "1%",
  },
  description: {
    color: "#C0C0C0",
  },
});
