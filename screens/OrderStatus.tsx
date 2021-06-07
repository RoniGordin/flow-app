import { Button, Icon, IconProps, Layout } from "@ui-kitten/components";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { StyleSheet, Linking, View, Text } from "react-native";

import OrderProgress from "../components/OrderProgress";
import { TopNavigationAccessoriesShowcase } from '../components/TopNavigation';
import { AppContext } from "../context/AppContext";
import { useMutation } from "@apollo/client";
import { updateLocation } from "../api/queries/updateLocation";
import { useLocation } from "react-router-native";
import { OrderStatusEnum } from "../constants/OrderStatusEnum";


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
    phone,
    onViewOrder,
  } = props;

  const { currentOrder, setCurrentOrder } = useContext(AppContext);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(undefined);
  const [status, setStatus] = useState(OrderStatusEnum.New);
  const {
    state: { resturantId, initialArrivalTime },
  } = useLocation();

  const [uLocation] = useMutation(updateLocation);


  const handleLocationUpdate = async () => {

    navigator.geolocation.getCurrentPosition(
      async position => {
        let arrivingTime;
        try {
          const res = await uLocation({ variables: { id: currentOrder?.id, lon: position.coords.longitude, lat: position.coords.latitude, resId: resturantId } });
          arrivingTime = res.data.updateLocation.order.arrivingTime;

          const status = res.data.updateLocation.order.status;
          setStatus(status);
          if (status === OrderStatusEnum.Done) {
            clearInterval(intervalId!);
            setCurrentOrder(undefined);
          }
        } catch (err) {
          console.log(err);
          throw new Error('Unable to fetch location')
        }
        setCurrentOrder({ ...currentOrder, location: position, arrivingTime });

      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {

    const interval = setInterval(() => {
      // TODO: check if the order status is finsihed then clear state and interval.
      handleLocationUpdate();
    }, 8000);

    setIntervalId(interval);
    return () => clearInterval(interval);
  }, []);


  const handleContactUsPress = () => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <Fragment>
      <TopNavigationAccessoriesShowcase title='Order Status' subtitle='Status of the order' />
      <Layout style={styles.container}>
        <Text style={styles.title} category="h1">
          Order Status
        </Text>

        <OrderProgress initialTime={initialArrivalTime} currentTimeLeft={currentOrder?.arrivingTime} orderTime={currentOrder?.orderTime} />
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
    paddingBottom: 120
  },
  title: {
    margin: 2,
  },
  contactButton: {
    marginVertical: 2,
    backgroundColor: '#606060',
    borderColor: '#606060'
  },
  orderButton: {
    marginVertical: 2,
    backgroundColor: "#FF5D55",
    borderColor: "#FF5D55"

  },
  actionsContainer: {},
});
