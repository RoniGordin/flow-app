import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { ResturantCard } from "./ResturantCard";

const dummyData = ["Girrafe", "Nono", "Nooch", "Joya"];
export const ResturantScrollView = () => {
    return (
        <ScrollView horizontal={true}>
            {dummyData.map((i,index) =>
                <ResturantCard key={index} name={i}/>
            )}
        </ScrollView>
    )
};
