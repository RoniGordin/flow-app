import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { View } from './Themed';

interface Props {
	timeLeft: number;
	orderTime: number;
}

export default function OrderProgress(props: Props) {
	const { timeLeft, orderTime } = props;

	const orderTimeProgress = Math.floor((timeLeft / orderTime) * 100);

	return (
		<View style={styles.container}>
			<AnimatedProgressWheel
				size={150}
				width={15}
				color={'blue'}
				progress={orderTimeProgress}
				animateFromValue={0}
				duration={2000}
			/>
			<Text style={styles.title} category='h6'>{timeLeft} minutes left</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 15,
	},
	title: {
		marginTop: 5,
	},
});
