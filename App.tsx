import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { View } from './components/Themed';

import { AppRegistry } from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://193.106.55.108:80/graphql',
	cache: new InMemoryCache()
});	

export default function App() {
	const colorScheme = useColorScheme();
	const isLoadingComplete = useCachedResources();
	
	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<ApolloProvider client={client}>
				<View style={styles.container}>
					<IconRegistry icons={EvaIconsPack} />
					<ApplicationProvider {...eva} theme={eva.dark}>
						<SafeAreaProvider>
							<Navigation colorScheme={colorScheme} />
						</SafeAreaProvider>
					</ApplicationProvider>
				</View>
			</ApolloProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: '10%',
		height: '100%',
		direction: 'ltr'
	}
});

AppRegistry.registerComponent('MyApplication', () => App);
