import React from 'react';
import { Platform } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

interface Props {
	timeLeft: number;
	orderTime: number;
}

export default function OrderProgress(props: Props) {
	const { timeLeft, orderTime } = props;

	const orderTimeProgress = Math.floor((timeLeft / orderTime) * 100);

	return (
		<Layout>
			<Text category='h6'>{timeLeft} minutes left</Text>
		</Layout>
	);
}