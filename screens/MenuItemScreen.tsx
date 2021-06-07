import React, { Fragment, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Image,
  GestureResponderEvent,
  Animated,
  View,
  Text
} from "react-native";
import { TopNavigationAccessoriesShowcase } from "../components/TopNavigation";
import { Button, Divider } from "@ui-kitten/components";
import { useHistory, useLocation } from "react-router-native";
import { MenuItem } from "../types";
import _ from "lodash";

interface LocationState {
  state: {
    menuItem: MenuItem;
  };
}

interface Props { }

type Changes = Record<string, boolean>;

export default function MenuItemScreen(props: Props) {
  const possibleChanges = ["Tomato", "Onions", "Banana"];
  const {
    state: { resturantName, items, item },
  } = useLocation();

  const [changes, setChanges] = useState<Changes>(
    item.changes?.reduce((acc, change) => {
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
    items.push({ name: item.name, price: item.price, changes: changes, id: item.id });
    history.goBack();
  };

  return (
    <View>
      <TopNavigationAccessoriesShowcase title={item.name} />
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={styles.container}>
          <Image
            source={{uri:item.imageUrl}}
            style={styles.itemImage}
          />

          <View style={styles.titleContainer}>
            <Text style={styles.description} category="h6">
              {item.description}
            </Text>
          </View>

          {changes && Object.entries(changes).length != 0 ? (
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
            Add Item To Cart
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
    marginTop: 40,
    backgroundColor: "#54B0F3",
    borderColor: "#54B0F3",
  },
  title: {
    marginTop: 15,
    fontSize: 24
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
    color: "#4C5054",
    fontSize: 18,
    paddingBottom: 15,
  },
});
