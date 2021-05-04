import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../Themed';
import { Text, Divider } from '@ui-kitten/components';

interface Props {
    title: string;
    component: JSX.Element;
}

export default function ComponentWrapper (props: Props) {
    const {title, component} = props;
    return (
        <View style={styles.view}>
            <Text style={styles.headline}>{title}</Text>
            <Divider />
            <View style={styles.container}>
                {component}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headline: {
        textAlign: 'left',
        marginLeft:5,
        textDecorationLine:'underline',
        fontWeight:'bold',
        letterSpacing:0.5,
        fontSize:17
    },
    container : {
        justifyContent:'center',
        alignItems: 'center',
        paddingTop:15
    },
    view :{
        paddingTop:35
    }
});