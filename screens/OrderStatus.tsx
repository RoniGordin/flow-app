import { Button, Icon, IconProps, Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Linking } from 'react-native';
import { View } from '../components/Themed';
import { Text } from '@ui-kitten/components';
import OrderProgress from '../components/OrderProgress';

interface Props {
	timeLeft: number;
	orderTime: number;
	phone: string;
	orderId: string;
	onViewOrder: () => void;
	onCloseScreen: () => void;
}

const PhoneIcon = (props: IconProps) => <Icon {...props} name='phone'/>;

export default function OrderStatusScreen(props: Props) {
	const {
		timeLeft,
		orderTime,
		phone,
		orderId,
		onViewOrder,
		onCloseScreen,
	} = props;

	const handleContactUsPress = () => {
		Linking.openURL(`tel:${phone}`);
	};

	return (
		<Layout style={styles.container}>
			<Text style={styles.title} category='h1'>Order Status</Text>
            <OrderProgress timeLeft={timeLeft} orderTime={orderTime}/>
			<View style={styles.actionsContainer}>
				<Button
					style={styles.button}
                    accessoryLeft={PhoneIcon}
					onPress={handleContactUsPress}
				>
					Contact Us
				</Button>
				<Button style={styles.button} onPress={onViewOrder}>
					View Order
				</Button>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
        margin: 2
	},
	button: {
		marginVertical: 2,
	},
	actionsContainer: {
	},
});
