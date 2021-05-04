import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { useHistory, useLocation } from 'react-router-native';

import { Button } from '@ui-kitten/components';
import { TopNavigationAccessoriesShowcase } from '../components/TopNavigation';

import { OrderItem } from '../types';

import ComponentWrapper from '../components/orderSummary/WrapComponent';
import CollectionTime from '../components/orderSummary/CollectionTime';
import ArrivalWay from '../components/orderSummary/ArrivalWay';
import PriceTable from '../components/orderSummary/PriceTable';

interface Props {
	orderList: OrderItem[];
}

export default function OrderSummaryScreen(props: Props) {
	const history = useHistory();
	const { orderList } = props;
	const { state: {isBuisnessMode, resturantName, items} } = useLocation();

	return (
		<Fragment>
			<TopNavigationAccessoriesShowcase title='Order Summary' />
			<PriceTable orderList={items} />
			<ComponentWrapper component={<ArrivalWay />} title='Arriving Way' />
			<ComponentWrapper
				component={<CollectionTime time={6} />}
				title='Estimated Collection Time'
			/>
			<View style={styles.buttonView}>
				<Button
					style={styles.button}
					onPress={() => history.push('status')}
				>
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
		backgroundColor: '#F85F6A',
		borderColor: '#F85F6A',
	},
	buttonView: {
		padding: 30
	},
	wrapper: {
		padding: 30,
	},
});
