import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StyleSheet, ScrollView} from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import AppRouter from './router';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { View } from './components/Themed';

export default function App() {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<View style={styles.container}>
				<IconRegistry icons={EvaIconsPack} />
				<ApplicationProvider {...eva} theme={eva.light}>
					<SafeAreaProvider>
						<AppRouter/>
					</SafeAreaProvider>
				</ApplicationProvider>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: '10%',
		height: '100%',
		direction: 'ltr'
	}
})