import React, { Fragment, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useHistory } from 'react-router-native';

import { Button } from '@ui-kitten/components';
import { TopNavigationAccessoriesShowcase } from '../components/TopNavigation';

import { OrderItem } from '../types';

import ComponentWrapper from '../components/orderSummary/WrapComponent';
import CollectionTime from '../components/orderSummary/CollectionTime';
import ArrivalWay from '../components/orderSummary/ArrivalWay';
import PriceTable from '../components/orderSummary/PriceTable';
import { AppContext } from '../context/AppContext';

interface Props {
	orderList: OrderItem[];
}

export default function OrderSummaryScreen(props: Props) {
	const history = useHistory();
	const { orderList } = props;
	const { currentOrder, setCurrentOrder } = useContext(AppContext);

	const submitOrder = () => {
		// TODO: acctually insert new order and get it's id. then save it to state
		setCurrentOrder({ id: '1234'});
		history.push('status')
	}

	return (
		<Fragment>
			<TopNavigationAccessoriesShowcase title='Order Summary' />
			<PriceTable orderList={orderList} />
			<ComponentWrapper component={<ArrivalWay />} title='Arriving Way' />
			<ComponentWrapper
				component={<CollectionTime time={6} />}
				title='Estimated Collection Time'
			/>
			<View style={styles.buttonView}>

				<Button
					style={styles.button}
					onPress={() => submitOrder()}
				>
					Submit order
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
