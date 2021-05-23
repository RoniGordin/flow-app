import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import moment from 'moment';

interface Props {
	timeLeft: Date | undefined;
	orderTime: Date | undefined;
}

export default function OrderProgress(props: Props) {
	const { timeLeft, orderTime } = props;
	const mTimeLeft = moment(timeLeft);
	const mOrderTime = moment(orderTime);

	const duration = Math.floor(moment.duration(mTimeLeft.diff(moment())).asMinutes());
	// TODO: calculate progress!
	return (
		<View style={styles.container}>
			<AnimatedProgressWheel
				size={150}
				width={15}
				color={'#FF5D55'}
				progress={50}
				animateFromValue={0}
				duration={2000}
			/>
			<Text style={styles.title} category='h6'>{duration > 0 ? duration : 0} minutes left</Text>
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
