import React, {Fragment, useState, useEffect, useRef} from 'react';
import {StyleSheet, Image, GestureResponderEvent, Animated} from 'react-native';
import {TopNavigationAccessoriesShowcase} from '../components/TopNavigation';
import {Button, Text, Divider} from '@ui-kitten/components';
import {useHistory, useLocation} from 'react-router-native';
import {View} from '../components/Themed';
import {MenuItem} from "../types";
import _ from "lodash";
import { FlexStyleProps } from "@ui-kitten/components/devsupport";


interface LocationState {
  state: {
    menuItem: MenuItem
  }
}


interface Props {}

type Changes = Record<string, boolean>;

export default function MenuItemScreen(props: Props) {
  const possibleChanges = ["Tomato", "Onions", "Banana"];
  const { state: {isBuisnessMode, resturantName, items, itemName} } = useLocation();

  const [changes, setChanges] = useState<Changes>(
    possibleChanges.reduce((acc, change) => {
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
    items.push({ name: itemName, price: 15, changes: changes });
    history.goBack();
  };

  return (
    <View>
      <TopNavigationAccessoriesShowcase title={itemName} />
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={styles.container}>
          <Image
            source={require("../assets/images/placeholder.png")}
            style={styles.itemImage}
          />

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

          <Button style={styles.button} onPress={onItemOrder} appearance="filled">
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
    width: 200,
    height: 200,
  },
  button: {
    marginVertical: 2,
    width: 200,
    marginTop: 30,
    backgroundColor: "#FF5D55",
    borderColor: "#FF5D55",
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
});
