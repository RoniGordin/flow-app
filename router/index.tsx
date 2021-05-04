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

export default function AppRouter() {

  return (
    <NativeRouter>
      <Route exact path='/kn' component={ResturantsScreen}/>
      <Route exact path="/" component={BuisnessDetailsScreen}/>
      <Route
        exact
        path='/order'
        component={() => (
          <OrderSummaryScreen orderList={DummyOrderData}/>
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
      <Route exact path='/menuItem' component={MenuItemScreen}/>
      <Route exact path='/menu' component={ResturantMenuScreen}/>
    </NativeRouter>
  );
}
