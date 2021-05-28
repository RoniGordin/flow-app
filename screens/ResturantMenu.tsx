import React, {useEffect, useState, useRef} from 'react';
import {Text, View} from '../components/Themed';
import {TopNavigationAccessoriesShowcase} from '../components/TopNavigation';
import MenuArea from '../components/menu/MenuArea';
import {Button, Icon, IconProps, Input} from '@ui-kitten/components';
import {StyleSheet, Animated} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useHistory, useLocation} from 'react-router-native';
import {useQuery} from "@apollo/client";
import {getResturantById, GetResturantByIdData} from "../api/queries/client/getResturantById";
import {Menu, MenuItem, Resturant} from "../types";
import _ from 'lodash';


interface Props {
}

const MENU_CATEGORIES =  [
  'Entrees',
  'Main Courses',
  'Desserts'
];

function ResturantMenu(props: Props) {
  const [value, setValue] = React.useState('');
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [visibleMenu, setVisibleMenu] = useState<MenuItem[]>([]);
  const [resturant, setResturant] = useState<Resturant>();
  const history = useHistory();
  const {state: {isBuisnessMode = false, resturantId, items, resturantName}} = useLocation();
  const {loading, error, data} = useQuery<GetResturantByIdData, { id: string }>(getResturantById, {variables: {id: resturantId}});

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const submitOrder = () => {
    history.push({
      pathname: "order",
      state: { resturantName: resturantName, items: items },
    });
  };

  useEffect(() => {
    if (data?.restaurant) {
      const {id, name, address, openingHours, imageUrl, menusByRestaurantId: {nodes: items}} = data.restaurant;
      setResturant({id, name, address, openingHours, imageUrl});

      const menuItems = items.flatMap(item =>
        item.itemsInMenusByMenuId.nodes
          .map(node => node.menuItemByItemId)
          .map(itemData => _.omit(itemData, '__typename') as MenuItem));
      setMenu(menuItems);

      setVisibleMenu(menuItems);
    }
  }, [data]);


  const onSearchChanged = (nextValue: string) => {
    setVisibleMenu(menu.filter(item=> item.name.toLowerCase().includes(nextValue.toLowerCase())));
    setValue(nextValue);
  };

  return (
    <View style={styles.container}>
      <TopNavigationAccessoriesShowcase title={'Resturant Menu'}/>
      <Input
        placeholder='🔍Search in menu'
        value={value}
        style={styles.searchStyle}
        onChangeText={onSearchChanged}
      />
      <ScrollView style={styles.menusContainer}>
        <Animated.View  style={{opacity: fadeAnim,}}>
        {
          _.map(MENU_CATEGORIES, c =>
            <MenuArea key={c} title={c} enableAdding={isBuisnessMode}
                      menuItems={visibleMenu?.filter(item => item.category.toLowerCase() === c.toLowerCase())}/>)
        }
        </Animated.View>
      </ScrollView>
      {!isBuisnessMode && (
        <Button
          style={styles.button}
          onPress={submitOrder}
        >
          Finish Order
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "5%",
  },
  menusContainer: {
    flex: 1,
  },
  button: {
    marginTop: 30,
    marginVertical: 2,
  },
  searchStyle: {
    padding: 10,
  },
});

export default ResturantMenu;
