import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@ui-kitten/components';
import { View } from '../Themed';
import { AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 


interface Props {
	//onArrivingWaySelection: () => void;
}

const CarIcon = () => <AntDesign name="car" size={26} color="white" />;
const BikeIcon = () => <MaterialCommunityIcons name="bike" size={26} color="white" />;
const BusIcon = () => <FontAwesome5 name="bus" size={26} color="white" />
const WalkIcon = () => <FontAwesome5 name="walking" size={26} color="white" />


export default function ArrivalWay(props: Props) {
    return (
        <View style={styles.container}>
            <Button style={styles.button} status='info' accessoryLeft={CarIcon} />
            <Button style={styles.button} status='info' accessoryLeft={BikeIcon} />
            <Button style={styles.button} status='info' accessoryLeft={BusIcon} />
            <Button style={styles.button} status='info' accessoryLeft={WalkIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
        borderRadius:90,
        height:80,
        width:80,
        marginLeft:7,
        marginRight:7,
        marginTop:8,
        backgroundColor:'#F85F6A',
        borderColor:'#F85F6A'
    },
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});