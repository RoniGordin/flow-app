import React, { useEffect, useState, useRef } from 'react';
import { TopNavigationAccessoriesShowcase } from '../components/TopNavigation';
import MenuArea from '../components/menu/MenuArea';
import { Button, Icon, IconProps, Input } from '@ui-kitten/components';
import { StyleSheet, Animated, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useHistory, useLocation } from 'react-router-native';
import { useQuery } from "@apollo/client";
import { getResturantById, GetResturantByIdData } from "../api/queries/client/getResturantById";
import { Menu, MenuItem, Resturant } from "../types";
import { AntDesign } from '@expo/vector-icons'; 

// import MenuData from '../constants/DummyOrderData';
import _ from 'lodash';


interface Props {
}


function ResturantMenu(props: Props) {
  const [value, setValue] = React.useState('');
  const [menu, setMenu] = useState<MenuItem[]>([]);
  // const [menu, setMenu] = useState<MenuItem[]>(MenuData);
  const [visibleMenu, setVisibleMenu] = useState<MenuItem[]>([]);
  // const [visibleMenu, setVisibleMenu] = useState<MenuItem[]>(MenuData);
  const [resturant, setResturant] = useState<Resturant>();
  const history = useHistory();
  const { state: { resturantId, items, resturantName } } = useLocation();
  const { loading, error, data } = useQuery<GetResturantByIdData, { id: string }>(getResturantById, { variables: { id: resturantId } });

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
      state: { resturantName: resturantName, items: items, resturantId: resturantId },
    });
  };

  useEffect(() => {
    if (data?.restaurant) {
      const { id, name, address, openingHours, imageUrl, menusByRestaurantId: { nodes: items } } = data.restaurant;
      setResturant({ id, name, address, openingHours, imageUrl });

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

  const getGroups = () => {
    return menu.reduce((groups, item) => ({
      ...groups,
      [item.category]: [...(groups[item.category] || []), item]
    }), {});
  }

  return (
    <View style={styles.container}>
      <TopNavigationAccessoriesShowcase title='Resturant Menu' subtitle={resturantName + " total menu"} />
      <Input
        placeholder='🔍Search in menu'
        value={value}
        style={styles.searchStyle}
        onChangeText={onSearchChanged}
      />
      <ScrollView style={styles.menusContainer}>
        <Animated.View  style={{opacity: fadeAnim,}}>
        {
           Object.entries(getGroups()).map(([key,value]) => 
            <MenuArea key={key} title={key} 
              menuItems={visibleMenu?.filter(item => item.category.toLowerCase() === key.toLowerCase())}/>
           )           
        }
        </Animated.View>
      </ScrollView>
      {(items.length != 0)?
        <Button
          style={styles.button}
          onPress={submitOrder}
        >
          <AntDesign name="shoppingcart" size={34} color="white" />
        </Button>: null}
        <View style={{height:100}}></View>
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
    marginVertical: 2,
    width:80,
    height:80,
    borderRadius:40,
    position:"absolute",
    backgroundColor:"#54B0F3",
    borderColor:"#54B0F3",
    bottom:90,
    right:25
  },
  searchStyle: {
    padding: 10,
  },
});

export default ResturantMenu;
