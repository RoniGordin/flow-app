import React, { Fragment, useState } from "react";
import { StyleSheet } from "react-native";
import { useHistory, useLocation } from "react-router-native";
import { View } from "../components/Themed";
import { Button } from "@ui-kitten/components";
import { TopNavigationAccessoriesShowcase } from "../components/TopNavigation";

import { OrderItem } from "../types";

import ComponentWrapper from "../components/orderSummary/WrapComponent";
import CollectionTime from "../components/orderSummary/CollectionTime";
import ArrivalWay from "../components/orderSummary/ArrivalWay";
import PriceTable from "../components/orderSummary/PriceTable";

interface Props {
  orderList: OrderItem[];
}

export default function OrderSummaryScreen(props: Props) {
  const history = useHistory();
  const {
    state: { isBuisnessMode, resturantName, items },
  } = useLocation();
  const [orderItems, setOrderItems] = useState(items);


  const removeItem = (index) => {
	  orderItems.splice(index,1)

	  setOrderItems(orderItems);
  };
  return (
    <Fragment>
      <TopNavigationAccessoriesShowcase title="Order Summary" />
      <PriceTable orderList={orderItems} removeItem={removeItem} />
      <ComponentWrapper component={<ArrivalWay />} title="Arriving Way" />
      <ComponentWrapper
        component={<CollectionTime time={6} />}
        title="Estimated Collection Time"
      />
      <View style={styles.buttonView}>
        <Button style={styles.button} onPress={() => history.push("status")}>
          Submit Order
        </Button>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 2,
    fontSize: 35,
    backgroundColor: "#F85F6A",
    borderColor: "#F85F6A",
  },
  buttonView: {
    padding: 30,
  },
  wrapper: {
    padding: 30,
  },
});
