import { Button, Icon, IconProps, Layout } from "@ui-kitten/components";
import React, { Fragment } from "react";
import { StyleSheet, Linking, View } from "react-native";

import { Text } from "@ui-kitten/components";
import OrderProgress from "../components/OrderProgress";
import { TopNavigationAccessoriesShowcase } from '../components/TopNavigation';


interface Props {
  timeLeft: number;
  orderTime: number;
  phone: string;
  orderId: string;
  onViewOrder: () => void;
  onCloseScreen: () => void;
}

const PhoneIcon = (props: IconProps) => <Icon {...props} name="phone" />;

export default function OrderStatusScreen(props: Props) {
  const {
    timeLeft,
    orderTime,
    phone,
    orderId,
    onViewOrder,
    onCloseScreen,
  } = props;

  const handleContactUsPress = () => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <Fragment>
      <TopNavigationAccessoriesShowcase title=''/>
      <Layout style={styles.container}>
        <Text style={styles.title} category="h1">
          Order Status
        </Text>
        <OrderProgress timeLeft={timeLeft} orderTime={orderTime} />
        <View style={styles.actionsContainer}>
          <Button
            style={styles.contactButton}
            accessoryLeft={PhoneIcon}
            onPress={handleContactUsPress}
          >
            Contact Us
          </Button>
          <Button style={styles.orderButton} onPress={onViewOrder}>
            View Order
          </Button>
        </View>
      </Layout>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
	paddingBottom:120
  },
  title: {
    margin: 2,
  },
  contactButton: {
	marginVertical: 2,
	backgroundColor:'#606060',
	borderColor:'#606060'
  },
  orderButton: {
    marginVertical: 2,
	backgroundColor:"#FF5D55",
	borderColor:"#FF5D55"

  },
  actionsContainer: {},
});