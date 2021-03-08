import React from 'react';
import { ScrollView } from 'react-native';
import { MenuItemCard } from './MenuItemCard';

// TODO : switch with json object that represents menu item
const dummyData = ["Tom yam soup", "Pad Thai", "Steak", "Pancake"];
const dummyColors = ['primary', "success" , "info", 'warning'];

export const MenuScrollView = () => {
    return (
        <ScrollView horizontal={true}>
            {dummyData.map((i,index) =>
                <MenuItemCard key={index} name={i}/>
            )}
        </ScrollView>
    )
};