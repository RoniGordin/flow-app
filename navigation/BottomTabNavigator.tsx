import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { DefaultTheme } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet,  View, Text } from 'react-native';


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
        //tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
        tabBarOptions={{
          activeTintColor: "#3B407C",
          inactiveTintColor:"#929397",
          showLabel:false,
          style: {
            height:70,
            position:"absolute",
            bottom:15,
            left:80,
            right:80,
            elevation:0,
            borderRadius:15,
            ...styles.shadow
          },
          allowFontScaling:true
        }}
      >
        <BottomTab.Screen
          name="Restaurants"
          component={AppRouter}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={{alignItems:"center"}}> 
                <MaterialIcons name="fastfood" size={28} color={color}/>
                <Text>Resturants</Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={{alignItems:"center"}}> 
              <AntDesign name="user" size={28} color={color} />
              <Text>Profile</Text>
            </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  shadow : {
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
})