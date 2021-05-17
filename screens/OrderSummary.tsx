import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useHistory, useLocation } from "react-router-native";
import { Button, Modal, Card, Text } from "@ui-kitten/components";
import { TopNavigationAccessoriesShowcase } from "../components/TopNavigation";
import { AntDesign } from "@expo/vector-icons";
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (items.length == 0) popupAlert();
  }, []);

  const removeItem = () => {
    if (items.length == 0) popupAlert();
  };

  const popupAlert = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
      history.goBack();
    }, 3000);
  };

  return (
    <Fragment>
      <TopNavigationAccessoriesShowcase title="Order Summary" />
      <PriceTable orderList={items} removeItem={removeItem} />
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

      <Modal visible={visible} style={styles.modal} backdropStyle={styles.backdrop}>
        <Card disabled={true}>
          <View style={styles.modalTitleArea}>
            <AntDesign name="shoppingcart" style={styles.modalIcon} size={28} color="white" />
            <Text style={styles.modalTitle}>Your order list is empty</Text>
          </View>
          <Text>Youll be redirected to menu page in 3 seconds</Text>
        </Card>
      </Modal>
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
  modal:{
    width:380,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalTitleArea: {
    flex:1,
    flexDirection:'row',
    paddingBottom:14
  },
  modalTitle: {
    fontSize:25
  },
  modalIcon: {
    paddingRight:10,
    textAlignVertical:'bottom',
  },
});
