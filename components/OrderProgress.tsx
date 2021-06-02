import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import moment from 'moment';

interface Props {
	initialTime: Date | undefined;
	orderTime: Date | undefined,
	currentTimeLeft: Date | undefined;
}

export default function OrderProgress(props: Props) {
	const { initialTime, currentTimeLeft, orderTime } = props;
	const mIntitialTime = moment(initialTime);
	const mCurrentTimeLeft = moment(currentTimeLeft);

	const currentDuration = Math.floor(moment.duration(mCurrentTimeLeft.diff(moment().utc())).asMinutes());
	const initialDuration = Math.floor(moment.duration(mIntitialTime.diff(moment(orderTime))).asMinutes());
	const progress = (1 - (currentDuration / initialDuration)) * 100;

	return (
		<View style={styles.container}>
			<AnimatedProgressWheel
				size={150}
				width={15}
				color={'#FF5D55'}
				progress={progress}
				animateFromValue={0}
				duration={2000}
			/>
			<Text style={styles.title} category='h6'>{currentDuration > 0 ? currentDuration : 0} minutes left</Text>
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
