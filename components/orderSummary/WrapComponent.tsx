import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Divider, Layout } from '@ui-kitten/components';

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
            <Layout style={styles.container} level='1'>
                {component}
            </Layout>
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