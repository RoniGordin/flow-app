import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon, Layout, Spinner, IconProps } from '@ui-kitten/components';

interface Props {
	//onArrivingWaySelection: () => void;
}

const CarIcon = (props: IconProps) => <Icon {...props} name='car'/>;
const StarIcon = (props: IconProps) => <Icon {...props} name='star'/>;
const TVIcon = (props: IconProps) => <Icon {...props} name='tv'/>;
const TwitterIcon = (props: IconProps) => <Icon {...props} name='twitter'/>;


export default function ArrivalWay(props: Props) {
    return (
        <Layout style={styles.container} level='1'>
            <Button style={styles.button} status='info' accessoryLeft={CarIcon} />
            <Button style={styles.button} status='info' accessoryLeft={StarIcon} />
            <Button style={styles.button} status='info' accessoryLeft={TVIcon} />
            <Button style={styles.button} status='info' accessoryLeft={TwitterIcon} />
        </Layout>
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