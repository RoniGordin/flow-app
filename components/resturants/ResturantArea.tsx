import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { ResturantScrollView } from './ResturantScrollView';
import { Text } from '@ui-kitten/components';


interface Props {
	title: string;
}

export default function OrderProgress(props: Props) {
	const { title } = props;

    return (
        <Fragment>
            <Text style={styles.title}>{title}</Text>
            <ResturantScrollView/>
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