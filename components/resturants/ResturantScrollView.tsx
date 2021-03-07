import React from 'react';
import { ScrollView } from 'react-native';
import { ResturantCard } from './ResturantCard';


const dummyData = ["Girrafe", "Nono", "Nooch", "Joya"];
const dummyColors = ['primary', "success" , "info", 'warning'];

export const ResturantScrollView = () => {
    return (
        <ScrollView horizontal={true}>
            {dummyData.map((i,index) =>
                <ResturantCard key={index} name={i}/>
            )}
        </ScrollView>
    )
};