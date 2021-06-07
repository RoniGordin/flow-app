import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { ResturantScrollView } from './ResturantScrollView';
import { Text } from '@ui-kitten/components';
import {Resturant} from "../../types";

interface Props {
	title: string;
	resturants: Resturant[];
}

export default function ResturantArea(props: Props) {
	const { title, resturants } = props;

    return (
        <Fragment>
            <Text style={styles.title}>{title}</Text>
            <ResturantScrollView resturants={resturants}/>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize:28,
        marginLeft:5,
        fontWeight:"bold",
        paddingTop:30
    }
    
});