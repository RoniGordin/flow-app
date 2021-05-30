import React from "react";
import {Layout} from "@ui-kitten/components";

import {NativeRouter, Route} from 'react-router-native';

import OrderSummaryScreen from '../screens/OrderSummary';
import ResturantsScreen from '../screens/Resturants';
import OrderStatusScreen from '../screens/OrderStatus';
import MenuItemScreen from '../screens/MenuItemScreen';
import ResturantMenuScreen from '../screens/ResturantMenu';
import BuisnessDetailsScreen from "../screens/BuisnessDetailsScreen";

import DummyOrderData from "../constants/DummyOrderData";
import ClientMainScreen from "../screens/ClientMainScreen";
import LoginScreen from "../screens/LoginScreen";

export default function AppRouter() {

  return (
    <NativeRouter>
      <Route exact path='/' component={LoginScreen/*ClientMainScreen*/}/>
      <Route exact path='/restaurants' component={ResturantsScreen}/>
      <Route exact path="/kjl" component={BuisnessDetailsScreen}/>
      <Route
        exact
        path='/order'
        component={() => (
          <OrderSummaryScreen/>
        )}
      />
      <Route
        exact
        path='/status'
        component={() => (
          <OrderStatusScreen
            phone='123123'
            orderId='2'
            timeLeft={5}
            orderTime={45}
            onCloseScreen={() => {
            }}
            onViewOrder={() => {
            }}
          />
        )}
      />
      <Route exact path='/menuItem' component={() => <MenuItemScreen/>}/>
      <Route exact path='/menu' component={ResturantMenuScreen}/>
    </NativeRouter>
  );
}
