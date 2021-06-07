import React from "react";
import { StyleSheet, Text } from "react-native";
import { useHistory } from "react-router-native";

import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  IconProps,
} from "@ui-kitten/components";

interface Props {
  title: string;
  subtitle:string;
}

const BackIcon = (props: IconProps) => (
  <Icon {...props} name="arrow-back" fill="#696984" />
);

export const TopNavigationAccessoriesShowcase = (props: Props) => {
  const { title, subtitle } = props;
  const history = useHistory();

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => history.goBack()} />
  );

  const renderTitle = () => <Text style={styles.navigator}>{title}</Text>;

  return (
    <Layout level="1">
      <TopNavigation
        alignment="center"
        title={renderTitle}
        accessoryLeft={renderBackAction}
        style={styles.container}
        subtitle={subtitle}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#EEF3F9",
  },
  navigator: {
    fontSize: 20,
    color: "#36B2F6",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
});
