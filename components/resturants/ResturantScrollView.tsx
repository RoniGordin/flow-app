import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { ResturantCard } from "./ResturantCard";
import resturants from '../../constants/DummyResturantsData';

export const ResturantScrollView = () => {
    return (
        <ScrollView horizontal={true}>
            {resturants.map((i,index) =>
                <ResturantCard key={index} name={i.name} imageUrl={i.imageUrl} summary={i.summary}/>
            )}
        </ScrollView>
    )
};
