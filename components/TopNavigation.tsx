import React from 'react';
import { StyleSheet } from 'react-native';
import { useHistory } from "react-router-native";

import { Icon, Layout, TopNavigation, TopNavigationAction, IconProps } from '@ui-kitten/components';

interface Props {
	title: string;
}

const BackIcon = (props: IconProps) => <Icon {...props} name='arrow-back'/>;

export const TopNavigationAccessoriesShowcase = (props: Props) => {
    const { title } = props;
    const history = useHistory();


  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => history.goBack()}/>
  );

  return (
    <Layout style={styles.container} level='1'>
      <TopNavigation
        alignment='center'
        title={title}
        accessoryLeft={renderBackAction}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 85,
  },
  navigator:{
      fontSize:18,
      fontWeight:'bold'
  }
});