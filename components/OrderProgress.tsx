import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import moment, { duration } from 'moment';
import arrivalTimeText from '../constants/arrivalTimeText';

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
				size={200}
				width={20}
				color={'#54B0F3'}
				backgroundColor={'#e4e4e4'}
				progress={progress}
				animateFromValue={0}
				duration={2000}
			/>
			{currentDuration > 0 && <Text style={styles.title}>{arrivalTimeText(currentDuration)}</Text>}
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
		marginTop: 8,
		backgroundColor: '#e4e4e4',
		color: '#9a9a9a',
		padding: '2%',
		borderRadius: 15,
	},
});
