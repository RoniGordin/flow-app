

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { AppContext } from './context/AppContext'
import AppRouter from './router';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { View } from './components/Themed';

import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://flow.cs.colman.ac.il/graphql',
	cache: new InMemoryCache()
});

export default function App() {

	const isLoadingComplete = useCachedResources();
	const [currentOrder, setCurrentOrder] = React.useState(undefined);

	if (!isLoadingComplete) {
		return null;
	} else {
		return (

			<ApolloProvider client={client}>
				<View style={styles.container}>
					<IconRegistry icons={EvaIconsPack} />
					<ApplicationProvider {...eva} theme={eva.dark}>
						<SafeAreaProvider>
							<AppContext.Provider value={{ currentOrder, setCurrentOrder }}>
								<AppRouter />
							</AppContext.Provider>
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
