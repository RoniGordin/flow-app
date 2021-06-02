import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/build/FontAwesome5";
import React from "react";


interface ArrivalWay {
    id: number,
    icon: () => JSX.Element
}

export const arrivalWays: ArrivalWay[] = [{
    id: 1,
    icon: () => <FontAwesome5 name="walking" size={26} color="white" />
},
{
    id: 2,
    icon: () => <AntDesign name="car" size={26} color="white" />
},
{
    id: 3,
    icon: () => <MaterialCommunityIcons name="bike" size={26} color="white" />
},
{
    id: 4,
    icon: () => <FontAwesome5 name="bus" size={26} color="white" />
}]