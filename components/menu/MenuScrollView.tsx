import React from 'react';
import { ScrollView } from 'react-native';
import { MenuItemCard } from './MenuItemCard';
import {MenuItem} from "../../types";

interface Props {
    menuItems: MenuItem[];
}

export const MenuScrollView = (props: Props) => {
    const {menuItems} = props;

    return (
        <ScrollView horizontal={true}>
            {menuItems?.map(item =>
                <MenuItemCard key={item.id} menuItem={item}/>
            )}
        </ScrollView>
    )
};