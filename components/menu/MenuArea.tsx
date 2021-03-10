import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { MenuScrollView } from './MenuScrollView';
import { Text } from '@ui-kitten/components';

// This is class is only for the poc, and will be merged with the restaurant area in the future

interface Props {
	title: string;
}

export default function OrderProgress(props: Props) {
	const { title } = props;

    return (
        <Fragment>
            <Text style={styles.title}>{title}</Text>
            <MenuScrollView/>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize:25,
        marginLeft:5,
        fontWeight:"bold",
        paddingTop:20
    }
    
});