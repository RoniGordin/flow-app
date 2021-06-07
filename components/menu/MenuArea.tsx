import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MenuScrollView} from './MenuScrollView';
import {Button, Icon, IconProps} from '@ui-kitten/components';
import {MenuItem} from "../../types";

const ActionIcon = (name: string) => (props: IconProps) => (
  <Icon name={name} {...props} />
);

const PlusIcon = ActionIcon('plus');

interface Props {
  title: string;
  menuItems?: MenuItem[];
}

export default function MenuArea(props: Props) {
  const {title,  menuItems = []} = props;

  const handleAdd = () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleConatiner}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <MenuScrollView menuItems={menuItems}/>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginLeft: 5,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  titleConatiner: {
    display: 'flex',
    flexDirection: 'row',
    direction: 'ltr',
    justifyContent: 'space-between'
  },
  container: {
    marginVertical: 10
  }
});