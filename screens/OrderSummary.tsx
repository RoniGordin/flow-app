import React, {Fragment} from 'react';
import { Button } from '@ui-kitten/components';
import { StyleSheet, View} from 'react-native';
import { OrderItem } from '../types';
import { TopNavigationAccessoriesShowcase } from '../components/TopNavigation';

import ComponentWrapper from '../components/orderSummary/WrapComponent';
import CollectionTime from '../components/orderSummary/CollectionTime';
import ArrivalWay from '../components/orderSummary/ArrivalWay';
import PriceTable from '../components/orderSummary/PriceTable';

interface Props {
	orderList: OrderItem[];
}

export default function OrderSummaryScreen(props: Props) {
	const {
		orderList
	} = props;

	
	return (
        <Fragment>
        <TopNavigationAccessoriesShowcase title='Order Summary' />
        <PriceTable orderList={orderList}/>
        <ComponentWrapper component={<ArrivalWay />} title='Arriving Way' />
        <ComponentWrapper component={<CollectionTime time={6}/>} title='Estimated Collection Time' />
        
        <View style={styles.buttonView}>
            <Button style={styles.button} onPress={() => alert("asdasd")}>
                Submit Order
            </Button>
        </View>
    </Fragment>
	);
}

const styles = StyleSheet.create({
    button: {
        margin: 2,
        fontSize: 35,
        backgroundColor:'#F85F6A',
        borderColor:'#F85F6A'
    },
    buttonView: {
        padding: 30,
        paddingTop: 80
    },
    wrapper: {
        padding: 85
    }
});