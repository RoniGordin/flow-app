import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { MaterialIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ProfileScreen from "../screens/ProfileScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

import AppRouter from "../router";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <React.Fragment>
      <BottomTab.Navigator
        initialRouteName="Restaurants"
        tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
      >
        <BottomTab.Screen
          name="Restaurants"
          component={AppRouter}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="fastfood" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" size={24} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </React.Fragment>
  );
}
